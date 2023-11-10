

const ButtonPage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Botones</h1>

                <div className="head-page-button">
                    <button className="btn-sm btn-primary">abrir</button>
                    <button className="btn-sm btn-danger">eliminar</button>
                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="bg-white p-3 mb-3 shadow">
                    <button className="btn btn-indigo">Indigo</button>
                    <button className="btn btn-primary">primary</button>
                    <button className="btn btn-success">success</button>
                    <button className="btn btn-danger">danger</button>
                    <button className="btn btn-warning">warning</button>
                    <button className="btn btn-info">info</button>
                    <button className="btn btn-light">light</button>
                    <button className="btn btn-dark">dark</button>
                </div>
                <div className="bg-white p-3 mt-3 shadow">
                    <button className="btn btn-outline-primary">primary</button>
                    <button className="btn btn-outline-warning">warning</button>
                    <button className="btn btn-outline-danger">danger</button>
                    <button className="btn btn-outline-success">success</button>
                </div>

                <div className="bg-white p-3 mt-3 shadow">
                    <button className="btn-sm btn-danger">btn pequeño</button>
                    <button className="btn btn-indigo">btn normal</button>
                </div>
            </div>
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default ButtonPage