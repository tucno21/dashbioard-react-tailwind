import { ChangeEvent } from 'react';

interface TextareaInputProps {
    label: string;
    name: string;
    value: string;
    placeholder?: string;

    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    error: string | undefined;
    icon?: JSX.Element;
}

const TextareaInput = ({ label, name, value, placeholder = '', onChange, error, icon }: TextareaInputProps) => {
    return (
        <div className="mt-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="relative">
                {icon && <div className="form-icon">{icon}</div>}
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`form-input ${(icon) ? 'pl-8' : ''} ${error ? 'border-red-600' : ''}`}
                ></textarea>
            </div>
            {error && <p className="text-red-500 text-xs mt-[2px]">{error}</p>}
        </div>
    );
};

export default TextareaInput;
