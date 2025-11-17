import {useEffect, useState} from "react";

const ImportPreview = ({file}: {file: File}) => {
    const [jsonData, setJsonData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setJsonData(null);
        setError(null);

        if (!file) {
            setError("No file provided.");
            return;
        }

        if (file.type != "application/json") {
            setError("File is not a JSON file.");
            return;
        }

        const reader = new FileReader();
        setLoading(true);

        reader.onload = () => {
            try {
                const text = reader.result as string;
                if (!text) {
                    setError("File is empty.");
                    setJsonData(null);
                } else {
                    const parsed = JSON.parse(text);
                    setJsonData(parsed);
                    setError(null);
                }
            } catch {
                setError("Cannot parse JSON");
                setJsonData(null);
            } finally {
                setLoading(false);
            }
        };

        reader.onerror = () => {
            setError("Error while reading file.");
            setJsonData(null);
            setLoading(false);
        };
        reader.readAsText(file);

        return () => {
            reader.onload = null;
            reader.onerror = null;
            reader.abort();
        };
    }, [file]);

    return (
        <div className="w-full p-4">
            <div className="mb-2">
                <strong>File:</strong> {file?.name}
            </div>

            {loading && <div>Loading...</div>}

            {error && <div className="text-red-600">{error}</div>}

            {jsonData && (
                <pre className="mt-3 p-3 bg-gray-100 rounded max-h-96 overflow-auto text-sm">
          {JSON.stringify(jsonData, null, 2)}
        </pre>
            )}
        </div>
    );
}

export default ImportPreview;