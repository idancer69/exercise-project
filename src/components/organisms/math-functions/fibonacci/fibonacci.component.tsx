import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';
import { fibonacci } from '../../../../helpers/math-operations.helpers';

type FibonacciComponentProps = {
    operation: string;
};

const FibonacciComponent: React.FC<FibonacciComponentProps> = ({ operation }) => {
    const handleFibonacciCalculation = (
        inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        try {
            const inputValue = inputValues[0].trim();

            if (!inputValue) {
                throw new Error("Proszę wprowadzić liczbę.");
            }

            const num = BigInt(inputValue);

            if (num < 0) {
                throw new Error("Podaj nieujemną liczbę całkowitą.");
            }

            if (num > 10000n) {
                throw new Error("Liczba jest zbyt duża.");
            }

            const fibResult = fibonacci(num);
            setResult(fibResult.toString());
            setErrorMessage(null);
        } catch (error) {
            setResult(null);
            setErrorMessage((error as Error).message || "Wystąpił nieoczekiwany błąd.");
        }
    }

    return <MathOperationComponent operationLabel="Podaj element ciągu" onOperationClick={handleFibonacciCalculation} numberOfInputs={1} operation={operation} />;
}

export default FibonacciComponent;