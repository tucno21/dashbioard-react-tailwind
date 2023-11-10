import { useState, FormEvent } from 'react';
import useForm from '../../hook/useForm';
import TextareaInput from '../../components/formValidation/TextareaInput';
import SelectInput from '../../components/formValidation/SelectInput';
import FileInput from '../../components/formValidation/FileInput';
import { BsFileEarmarkFont, BsCardText, BsTags, BsCardImage } from 'react-icons/bs';
import FormInput from '../../components/formValidation/FormInput';

interface Errors {
    title?: string;
    content?: string;
    category?: string;
    photo?: string;
}

const errorInit: Errors = {
    title: '',
    content: '',
    category: '',
    photo: ''
}

const InputValidate = () => {

    const { title, content, category, photo, onInputChange, onChangeFormMultiple } = useForm({
        title: '',
        content: '',
        category: '',
        photo: null
    })
    const [errors, setErrors] = useState<Errors>({});
    const [imagenUrl, setImagenUrl] = useState<string | null>(null);


    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files[0]) {
            const file = event.target.files && event.target.files[0];

            if (file.type.split('/')[0] !== 'image') {
                setImagenUrl(null);
                onChangeFormMultiple({ photo: '' });
                setErrors({ ...errors, photo: 'Solo se permiten imagenes' });
                return;
            }

            // almacenar el archivo
            onChangeFormMultiple({ photo: file });

            // MOSTRAR LA IMAGEN
            setImagenUrl(URL.createObjectURL(file))

            setErrors({ ...errors, photo: '' });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors(errorInit);
        const newErrors: Errors = {};
        if (title.trim() === '') newErrors.title = 'El título es obligatorio';
        if (content.trim() === '') newErrors.content = 'La descripción es obligatoria';
        if (category.trim() === '') newErrors.category = 'La categoría es obligatoria';
        if (photo === null || photo == '') newErrors.photo = 'La foto es obligatoria';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        console.log(photo);
    };

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Input Validate</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <form id="formulario" onSubmit={handleSubmit}>

                    <FormInput
                        label="Nombre"
                        name="title"
                        type='text'
                        value={title}
                        onChange={onInputChange}
                        error={errors.title}
                        icon={<BsFileEarmarkFont />}
                    />

                    <TextareaInput
                        label="Descripción"
                        icon={<BsCardText />}
                        name="content"
                        value={content}
                        placeholder='Ingrese la descripción'
                        onChange={onInputChange}
                        error={errors.content}
                    />

                    <SelectInput
                        label="Categoria"
                        icon={<BsTags />}
                        name="category"
                        value={category}
                        onChange={onInputChange}
                        options={[
                            { value: '1', label: 'Categoria 1' },
                            { value: '2', label: 'Categoria 2' },
                            { value: '3', label: 'Categoria 3' },
                        ]}
                        error={errors.category}
                    />

                    <FileInput
                        label={'Foto'}
                        name={'photo'}
                        onChange={onFileChange}
                        error={errors.photo}
                        icon={<BsCardImage />}
                    />

                    <div className="mt-3">
                        <button type="submit" className="btn btn-indigo mr-2" id="btnSubmit">
                            Prueba
                        </button>
                    </div>
                </form>
            </div>

            {imagenUrl && <img src={imagenUrl} alt="" className="w-32" />}
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default InputValidate