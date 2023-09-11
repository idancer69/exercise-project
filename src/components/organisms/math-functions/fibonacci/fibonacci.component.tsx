import { fibonacci,performOperation } from '../../../../helpers/math-operations.helpers';
import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';

type FibonacciComponentProps = {
    operation: string;
};

const FibonacciComponent: React.FC<FibonacciComponentProps> = ({ operation }) => {
    const handleCheck = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const num = performOperation(inputValues, n => n);
            setResult(fibonacci(num).toString());
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message);
        }
    }
    return <MathOperationComponent operationLabel="Podaj element ciągu" onOperationClick={handleCheck} numberOfInputs={1} operation={operation} />;
}

export default FibonacciComponent;