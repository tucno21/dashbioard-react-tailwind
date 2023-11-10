

const BadgePage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Badge</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="bg-white p-3 mb-3 shadow">
                    <p>Basic Badges</p>
                    <button className="badge badge-primary">badge-primary</button>
                    <button className="badge badge-success">badge-success</button>
                    <button className="badge badge-danger">badge-danger</button>
                    <button className="badge badge-warning">badge-warning</button>
                    <button className="badge badge-info">badge-info</button>
                    <button className="badge badge-light">badge-light</button>
                    <button className="badge badge-dark">badge-dark</button>
                </div>
                <div className="bg-white p-3 mb-3 shadow">
                    <p>Basic Badges</p>
                    <button className="badge-sm badge-primary">primary</button>
                    <button className="badge-sm badge-primary">badge-sm</button>
                    <button className="badge badge-primary">badge</button>
                    <button className="badge-lg badge-primary">badge-lg</button>
                </div>
            </div>
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default BadgePage