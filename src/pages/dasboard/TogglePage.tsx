

const TogglePage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Toggle</h1>

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
                                <div className="flex items-center gap-2">
                                    <input id="toggleChecked" type="checkbox" className="toggle" />
                                    <label htmlFor="toggleChecked">toggle Checked</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="toggle" type="checkbox" className="toggle" />
                                    <label htmlFor="toggle">toggle not Checked</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Color de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5 flex gap-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <input id="primary" type="checkbox" className="toggle toggle-primary" />
                                    <label htmlFor="primary">primary</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="success" type="checkbox" className="toggle toggle-success" />
                                    <label htmlFor="success">success</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="danger" type="checkbox" className="toggle toggle-danger" />
                                    <label htmlFor="danger">danger</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="warning" type="checkbox" className="toggle toggle-warning" />
                                    <label htmlFor="warning">warning</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="info" type="checkbox" className="toggle toggle-info" />
                                    <label htmlFor="info">info</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="dark" type="checkbox" className="toggle toggle-dark" />
                                    <label htmlFor="dark">dark</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">tamaño de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="mt-5 flex gap-6">
                                <div className="flex items-center gap-2">
                                    <input id="small" type="checkbox" className="toggle toggle-xs" />
                                    <label htmlFor="small">small</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="normal" type="checkbox" className="toggle" />
                                    <label htmlFor="normal">normal</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id="large" type="checkbox" className="toggle toggle-lg" />
                                    <label htmlFor="large">large</label>
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

export default TogglePage