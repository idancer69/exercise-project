import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { performOperation, factorial } from '../../../../helpers/math-operations.helpers';

type FactorialComponentProps = {
    operation: string;
};

const FactorialComponent: React.FC<FactorialComponentProps> = ({ operation }) => {
    const handleCheck = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const num = performOperation(inputValues, n => n);
            setResult(factorial(num).toString());
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message);
        }
    }
    return <MathOperationComponent operationLabel="Oblicz silnię" onOperationClick={handleCheck} numberOfInputs={1} operation={operation} />;
}

export default FactorialComponent;