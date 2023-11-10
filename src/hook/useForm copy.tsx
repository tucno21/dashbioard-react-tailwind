import { useState } from 'react';

export const useForm = <FormValues extends Record<string, any>>(initState: FormValues) => {

    const [state, setState] = useState<FormValues>(initState);

    const onChange = (field: keyof FormValues, value: any) => {
        setState({
            ...state,
            [field]: value
        });
    }

    const onChangeMultiple = (form: Partial<FormValues>) => {
        setState({
            ...state,
            ...form
        });
    }

    const setFormValue = (form: FormValues) => {
        setState(form);
    }

    return {
        ...state,           // Los valores actuales del formulario
        form: state,        // Alias para los valores actuales del formulario
        onChange,           // Función para actualizar un campo
        onChangeMultiple,   // Función para actualizar múltiples campos
        setFormValue        // Función para establecer el estado completo del formulario
    }
}