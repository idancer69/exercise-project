import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { performOperation, multiply } from '../../../../helpers/math-operations.helpers';

type MultiplicationComponentProps = {
    operation: string;
};

const MultiplicationComponent: React.FC<MultiplicationComponentProps> = ({ operation }) => {
    const handleMultiplication = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const [product, wasRounded] = performOperation(inputValues, multiply);
            if (wasRounded) {
                setErrorMessage("Uwaga: Wynik został zaokrąglony.");
            } else {
                setErrorMessage(null);
            }
            setResult(product.toString());
        } catch (error) {
            setErrorMessage((error as Error).message || "Wystąpił błąd podczas mnożenia.");
        }
    }
    return <MathOperationComponent operationLabel="Pomnóż" onOperationClick={handleMultiplication} numberOfInputs={2} operation={operation} />;
}

export default MultiplicationComponent;