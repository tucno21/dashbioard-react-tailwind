import { FC, ChangeEvent } from 'react';

interface SelectInputProps {
    label: string;
    name: string;
    value: string;

    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;

    options: { value: string; label: string }[];

    error?: string | undefined;
    icon?: JSX.Element;
}

const SelectInput: FC<SelectInputProps> = ({ label, name, value, onChange, options, error, icon }) => {
    return (
        <div className="mt-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="relative">
                {icon && <div className="form-icon">{icon}</div>}
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`form-input ${(icon) ? 'pl-8' : ''} ${error ? 'border-red-600' : ''}`}
                >
                    <option value="">Seleccione - {label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className="text-red-500 text-xs mt-[2px]">{error}</p>}
        </div>
    );
};

export default SelectInput;
