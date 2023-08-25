import MathOperationComponent from '../../../molecules/math-operation/math-operation.component';

const countVowels = (text: string) => {
    return (text.match(/[aeiouAEIOU]/g) || []).length;
};

type VowelCountComponentProps = {
    operation: string;
};

const VowelCountComponent: React.FC<VowelCountComponentProps> = ({ operation }) => {
    const handleCheck = (inputValues: string[],
        setResult: React.Dispatch<React.SetStateAction<string | null>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
        try {
            const vowelsCount = countVowels(inputValues[0]);
            setResult(vowelsCount.toString());
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage((error as Error).message);
        }
    }
    return <MathOperationComponent operationLabel="Podaj ilość samogłosek" onOperationClick={handleCheck} numberOfInputs={1} inputPlaceholders={["Podaj wyraz"]} operation={operation} />;
}

export default VowelCountComponent;