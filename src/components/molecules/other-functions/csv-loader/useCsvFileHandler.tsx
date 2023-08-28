import { useState } from 'react';

interface CsvFileHandlerOptions {
    onData: (data: string[]) => void;
    onError?: (message: string) => void;
}

const useCsvFileHandler = ({ onData, onError }: CsvFileHandlerOptions) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const setErrorAndNotify = (message: string) => {
        setErrorMessage(message);
        if (onError) onError(message);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            setErrorAndNotify("Plik jest zbyt duży.");
            return;
        }

        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        if (fileExtension !== 'csv') {
            setErrorAndNotify("Niewłaściwy format pliku. Proszę przesłać plik CSV.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = (e.target as FileReader).result as string;

            if (!content.includes("prawidłowy nagłówek 1") || !content.includes("prawidłowy nagłówek 2")) {
                setErrorAndNotify("Plik ma nieprawidłowe kodowanie lub zawiera nieoczekiwane znaki.");
                return;
            }

            onData(content.split('\n'));
        };

        reader.onerror = () => {
            setErrorAndNotify("Błąd podczas wczytywania pliku.");
        }

        reader.readAsText(file, 'UTF-8');
    }


    return { handleFileChange, errorMessage };
}

export default useCsvFileHandler;
