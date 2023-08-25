import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { performOperation, divide } from '../../../helpers/math-operations.helpers';

type DivisionComponentProps = {
    operation: string;
};

const DivisionComponent: React.FC<DivisionComponentProps> = ({ operation }) => {
    const handleDivision = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const quotient = performOperation(inputValues, divide);
            setResult(quotient.toString());
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message || "Wystąpił błąd podczas dzielenia.");
        }
    }
    return <MathOperationComponent operationLabel="Podziel" onOperationClick={handleDivision} numberOfInputs={2} operation={operation} />;
};

export default DivisionComponent