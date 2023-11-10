import Toast from "../../components/toast/Toast";
import toastPersonalizado from "../../components/toast/toastCustom";
import useToasts from "../../components/toast/useToast";

const ToastPage = () => {

    const { list, setList, toast } = useToasts();

    const success = () => toast.success('By default', 6000);
    const error = () => toast.error('todo esta mal');
    const warning = () => toast.warning('tenemos un aviso');
    const info = () => toast.info('tenemos una info');

    const customSuccess = () => {
        toastPersonalizado({ status: 'success', message: 'Color de estado correcto...', bgColor: false });
    };
    const customError = () => {
        toastPersonalizado({ status: 'error', message: 'Color de estado error...' });
    }
    const customWarning = () => {
        toastPersonalizado({ status: 'warning', message: 'Color de estado warning...', bgColor: false });
    }
    const customInfo = () => {
        toastPersonalizado({ status: 'info', message: 'Color de estado info...' });
    }

    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Toast</h1>

                <div className="head-page-button">

                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-1 py-1 md:px-2 md:py-2 w-full">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <button className="btn btn-outline-success" onClick={success}>Success</button>
                        <button className="btn btn-outline-danger" onClick={error}>error</button>
                        <button className="btn btn-outline-warning" onClick={warning}>warning</button>
                        <button className="btn btn-outline-info" onClick={info}>info</button>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-outline-success" onClick={customSuccess}>Toast Custom Success</button>
                        <button className="btn btn-outline-danger" onClick={customError}>Toast Custom error</button>
                        <button className="btn btn-outline-warning" onClick={customWarning}>Toast Custom warning</button>
                        <button className="btn btn-outline-info" onClick={customInfo}>Toast Custom info</button>
                    </div>
                </div>

                <Toast toastlist={list} setList={setList} />
            </div>
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default ToastPage