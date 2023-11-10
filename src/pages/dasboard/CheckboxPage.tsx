

const CheckboxPage = () => {
    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Checkbox</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="space-y-6">

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Basic radio</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-1.5">
                                    <input id="checked" className="radio" type="radio" name="basic-radio" checked />
                                    <label htmlFor="checked" className="label">Checked</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="unchecked" type="radio" className="radio" name="basic-radio" />
                                    <label htmlFor="unchecked" className="label">Unchecked</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Color de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="flex flex-wrap gap-4 mt-5">
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-primary" className="radio box-primary" type="radio" name="radio-color" checked />
                                    <label htmlFor="radio-primary" className="label">Primary</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-success" className="radio box-success" type="radio" name="radio-color" />
                                    <label htmlFor="radio-success" className="label">Success</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-danager" className="radio box-danger" type="radio" name="radio-color" />
                                    <label htmlFor="radio-danager" className="label">Danger</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-warning" className="radio box-warning" type="radio" name="radio-color" />
                                    <label htmlFor="radio-warning" className="label">Warning</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-info" className="radio box-info" type="radio" name="radio-color" />
                                    <label htmlFor="radio-info" className="label">Info</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-dark" className="radio box-dark" type="radio" name="radio-color" />
                                    <label htmlFor="radio-dark" className="label">Dark</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">tamaño de checkbox</h4>
                            <p className="card-subtitle">ejemplo.</p>
                            <div className="flex flex-wrap gap-4 mt-5">
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-sm" className="radio radio-xs" type="radio" name="radio-size" checked />
                                    <label htmlFor="radio-sm" className="label label-sm"> Small </label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-md" className="radio" type="radio" name="radio-size" />
                                    <label htmlFor="radio-md" className="label">Normal</label>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <input id="radio-lg" className="radio radio-lg" type="radio" name="radio-size" />
                                    <label htmlFor="radio-lg" className="label label-lg"> Large </label>
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

export default CheckboxPage