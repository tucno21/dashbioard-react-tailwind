import { useState } from "react"
import Modal from "../../components/modal/Modal"
import useToasts from "../../components/toast/useToast";
import Toast from "../../components/toast/Toast";

const ModalPage = () => {

    const [modal, setModal] = useState(false)

    const { list, setList, toast } = useToasts();

    const openModal = () => {
        setModal(!modal)
    }

    const closeModal = () => {
        setModal(false);
        toast.success('Se envio con satisfacción');
    }

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Modal</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <button className="btn btn-outline-success" onClick={openModal}>Success</button>
                <Modal show={modal} setShow={setModal} title="Nuevo Modal">
                    <h1>hola</h1>
                    <p>nuevo modal</p>
                    <button className="btn btn-outline-success" onClick={closeModal}>Success</button>
                </Modal>
            </div>
            <Toast toastlist={list} setList={setList} />
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default ModalPage