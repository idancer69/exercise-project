import { add,performOperation } from '../../../../helpers/math-operations.helpers';
import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';

type AdditionComponentProps = {
    operation: string;
};

const AdditionComponent: React.FC<AdditionComponentProps> = ({ operation }) => {
    const handleAddition = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {

        try {
            const [sum, wasRounded] = performOperation(inputValues, add);
            if (wasRounded) {
                setErrorMessage("Uwaga: Wynik został zaokrąglony.");
            } else {
                setErrorMessage(null);
            }
            setResult(sum.toString());
        } catch (error) {
            setErrorMessage((error as Error).message || "Wystąpił błąd podczas dodawania.");
        }
    }
    return <MathOperationComponent operationLabel="Dodaj" onOperationClick={handleAddition} numberOfInputs={2} operation={operation} />
}

export default AdditionComponent;
