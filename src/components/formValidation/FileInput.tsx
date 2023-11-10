import { ChangeEvent } from "react";

interface FileInputProps {
    label: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: JSX.Element;
}

const FileInput = ({ label, name, onChange, error, icon }: FileInputProps) => {

    return (
        <div className="mt-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="relative">
                {icon && <div className="form-icon">{icon}</div>}
                <input
                    type="file"
                    name={name}
                    id={name}
                    className={`form-input-file ${(icon) ? 'pl-8' : ''} ${error ? 'border-red-600' : ''}`}
                    onChange={onChange}
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-[2px]">{error}</p>}
        </div>
    );
};

export default FileInput;
