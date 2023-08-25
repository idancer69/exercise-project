import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { performOperation, subtract } from '../../../helpers/math-operations.helpers';

type SubtractionComponentProps = {
    operation: string;
};

const SubtractionComponent: React.FC<SubtractionComponentProps> = ({ operation }) => {
    const handleSubtraction = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const difference = performOperation(inputValues, subtract);
            setResult(difference.toString());
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message || "Wystąpił błąd podczas odejmowania.");
        }
    }
    return <MathOperationComponent operationLabel="Odejmij" onOperationClick={handleSubtraction} numberOfInputs={2} operation={operation} />
}

export default SubtractionComponent;


