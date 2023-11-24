import { performOperation, subtract } from '../../../../helpers/math-operations.helpers';
import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';

type SubtractionComponentProps = {
    operation: string;
};

const SubtractionComponent: React.FC<SubtractionComponentProps> = ({ operation }) => {
    const handleSubtraction = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const [difference, wasRounded] = performOperation(inputValues, subtract);
            if (wasRounded) {
                setErrorMessage("Uwaga: Wynik został zaokrąglony.");
            } else {
                setErrorMessage(null);
            }
            setResult(difference.toString());
        } catch (error) {
            setErrorMessage((error as Error).message || "Wystąpił błąd podczas odejmowania.");
        }
    }
    return <MathOperationComponent operationLabel="Odejmij" onOperationClick={handleSubtraction} numberOfInputs={2} operation={operation} />
}

export default SubtractionComponent;


