import Swal from "../../components/alert/Alert"


const AlertPage = () => {

    const openAlert = () => {
        Swal.fire({
            icon: "question",
            title: "The Internet?",
            text: "That thing is still around?",
            buttonConfirm: "si",
            buttonCancel: "no",
        }).then((result) => {
            if (result) {
                console.log("si");
            }
        });
    }

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Alert</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <button className="btn btn-outline-success" onClick={openAlert}>Success</button>
            </div>

            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default AlertPage