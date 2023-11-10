

const RadioPage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Radio</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="space-y-6">

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Input label</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5 flex gap-6">
                                <div className="flex items-center gap-1">
                                    <input id="checked" className="checkbox" type="checkbox" name="basic-checkbox" checked={true} />
                                    <label htmlFor="checked" className="label">Checked</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="unchecked" className="checkbox" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="unchecked" className="label">Unchecked</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Color de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5 flex gap-6 flex-wrap">
                                <div className="flex items-center gap-1">
                                    <input id="primary" className="checkbox box-primary" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="primary" className="label">primary</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="success" className="checkbox box-success" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="success" className="label">success</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="danger" className="checkbox box-danger" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="danger" className="label">danger</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="warning" className="checkbox box-warning" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="warning" className="label">warning</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="info" className="checkbox box-info" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="info" className="label">info</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="dark" className="checkbox box-dark" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="dark" className="label">dark</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">tamaño de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5 flex gap-6">
                                <div className="flex items-center gap-1">
                                    <input id="small" className="checkbox box-xs" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="small" className="label">small</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="normal" className="checkbox" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="normal" className="label">normal</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input id="large" className="checkbox box-lg" type="checkbox" name="basic-checkbox" />
                                    <label htmlFor="large" className="label">large</label>
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

export default RadioPage