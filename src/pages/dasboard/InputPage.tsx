import fondo from './../../assets/fondo.png';
import { BiFont, BiText, BiImage, BiPurchaseTag } from 'react-icons/bi';

const InputPage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Input</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-2 py-2 w-full">
                <div className="space-y-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input Básico</h4>
                            <p className="card-subtitle">Use el siguiente la clase <code>form-input</code> para crear input basico.</p>
                            <input type="text" className="form-input" placeholder="Phone" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input label</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5">
                                <label htmlFor="title" className="form-label">Titulo</label>
                                <input type="text" className="form-input" placeholder="Phone" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input con texto de ayuda</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5">
                                <input type="text" className="form-input" placeholder="Phone" />
                                <p className="help-text mt-1">The Phone must be a valid Phone address</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tamaños de Input</h4>
                            <p className="card-subtitle">agregar el siguiente la clase <code>input-sm</code>, <code>input-md</code> y <code>input-lg</code> para crear input basico.</p>
                            <div className="mt-5 flex flex-col gap-4">
                                <input type="text" className="form-input input-sm" placeholder="Phone" />
                                <input type="text" className="form-input input-md" placeholder="Phone" />
                                <input type="text" className="form-input input-lg" placeholder="Phone" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input con icono al costado</h4>
                            <p className="card-subtitle">Use el siguiente la clase <code>form-input-sm</code>, <code>form-input-md</code> y <code>form-input-lg</code> para crear input basico.</p>
                            <div className="mt-5 ">
                                {/* <!-- imput --> */}
                                <div className="mt-3">
                                    <label htmlFor="title" className="form-label">Titulo</label>
                                    <div className="relative">
                                        <div className="form-icon">
                                            <BiFont />
                                        </div>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="form-input pl-8"
                                            placeholder="Titulo del Trabajo"
                                        />
                                    </div>
                                </div>

                                {/* <!-- textarea --> */}
                                <div className="mt-3">
                                    <label htmlFor="content" className="form-label">Descripción</label>
                                    <div className="relative">
                                        <div className="form-icon">
                                            <BiText />
                                        </div>
                                        <textarea
                                            name="content"
                                            id="content"
                                            className="form-input pl-8"
                                            placeholder="Descripción del Trabajo"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input Image</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5">
                                {/* <!-- imagen --> */}
                                <div className="mt-3">
                                    <label htmlFor="photo" className="form-label">Imagen</label>
                                    <div className="relative">
                                        <div className="form-icon">
                                            <BiImage />
                                        </div>
                                        <input type="file" name="photo" id="photo" className="form-input-file pl-8" />
                                    </div>
                                </div>

                                {/* <!-- photo --> */}
                                <div className="mt-3">
                                    <label className="form-label">Foto de cubierta</label>
                                    <div className="input-photo-border">
                                        <div className="space-y-1 input-photo-center">
                                            <div className="input-photo-center">
                                                <label htmlFor="subirFoto" className="input-photo-label">
                                                    <span>Cargar un archivo</span>
                                                    <input id="subirFoto" name="subirFoto" type="file" className="sr-only" />
                                                </label>
                                            </div>
                                            <div className="input-photo-center">
                                                <img src={fondo} alt="" className="w-32" />
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 1 MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input Select</h4>
                            <p className="card-subtitle">ejemplo</p>
                            <div className="mt-5 flex flex-col gap-4">
                                <label htmlFor="category" className="form-label">Categoria</label>
                                <div className="relative">
                                    <div className="form-icon">
                                        <BiPurchaseTag />
                                    </div>
                                    <select name="category" id="category" className="form-input pl-8">
                                        <option value="">Seleccione una categoria</option>
                                        <option value="1">Categoria 1</option>
                                        <option value="2">Categoria 2</option>
                                        <option value="3">Categoria 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default InputPage
