import { ChangeEvent } from 'react';

interface TextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder?: string;

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;

    autoComplete?: 'on' | 'off';
    error: string | undefined;
    icon?: JSX.Element;
}

const TextInput = ({ label, name, type = 'text', value, error, placeholder = '', autoComplete = 'off', onChange, icon }: TextInputProps) => {

    return (
        <div className="">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="relative">
                {icon && <div className="form-icon">{icon}</div>}
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`form-input ${(icon) ? 'pl-8' : ''} ${error ? 'border-red-600' : ''}`}
                    autoComplete={autoComplete}
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-[2px]">{error}</p>}
        </div>
    );
};

export default TextInput;
