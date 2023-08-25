import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { performOperation, isPrime } from '../../../helpers/math-operations.helpers';

type PrimeCheckComponentProps = {
    operation: string;
};

const PrimeCheckComponent: React.FC<PrimeCheckComponentProps> = ({ operation }) => {
    const handleCheck = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const num = performOperation(inputValues, n => n);
            setResult(isPrime(num) ? "Liczba jest pierwsza" : "Liczba nie jest pierwsza");
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message);
        }
    }
    return <MathOperationComponent operationLabel="Sprawdź" onOperationClick={handleCheck} numberOfInputs={1} operation={operation} />;
}

export default PrimeCheckComponent;