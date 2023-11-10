import { useState, ChangeEvent } from "react";

interface FormState {
    [key: string]: any;
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

interface returForm {
    [key: string]: any;
    onInputChange: (event: InputChangeEvent) => void;
    onChangeForm: (name: string, value: any) => void;
    onChangeFormMultiple: (values: FormState) => void;
    onResetForm: () => void;
}

//recibe un objeto por defecto
const useForm = (initialForm: FormState = {}): returForm => {

    //eatdo de almacenar name:value del formulario
    const [formState, setFormState] = useState<FormState>(initialForm);

    //funcion que maneja el evento de asignar value a name
    const onInputChange = ({ target }: InputChangeEvent) => {
        const { name, value } = target;
        setFormState({
            //destructuring
            ...formState,
            //buscamos el name del input y le asignamos el valor
            [name]: value
        })
    }

    //funcion que asigna el valor de name:value a name:value del formulario
    const onChangeForm = (name: string, value: any) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    //funcion que asigna multiples name:value
    const onChangeFormMultiple = (values: FormState) => {
        setFormState((prevState) => ({
            ...prevState,
            ...values
        }));
    }

    //funcion que limpia el formulario
    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState, //retornamos el objeto de forma destructurada
        onInputChange, //retornamos la funcion que maneja el evento
        onChangeForm, //retornamos la funcion que asigna el valor de name:value a name:value del formulari
        onChangeFormMultiple, //retornamos la funcion que asigna multiples name:value
        onResetForm //retornamos la funcion que limpia el formulario
    }
}
export default useForm