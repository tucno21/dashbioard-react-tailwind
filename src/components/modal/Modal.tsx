import React, { ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    showHeader?: boolean;
    showClose?: boolean;
    size?: 'normal' | 'large' | 'full'; // Agrega los valores de tamaño que necesites
}


const Modal = ({ children, show, setShow, title = 'Modal', showHeader = true, showClose = true, size = 'large' }: ModalProps) => {

    const closeModal = () => {
        setShow(false);
    }

    return (
        <>
            {show && (
                <div className="fixed top-0 left-0 z-[999] w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <div className={` 
                    ${size === 'normal' && 'w-10/12 md:w-[35rem]'} 
                    ${size === 'large' && 'w-11/12 md:w-[45rem]'}
                    ${size === 'full' && 'w-11/12 md:w-10/12'}
                    min-h-[5rem] bg-white opacity-100 relative rounded-md shadow-xl p-4`}>
                        {
                            showHeader && (
                                <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#bebcbc] ">
                                    <h3 className="text-xl font-bold">{title}</h3>
                                </div>
                            )
                        }
                        {
                            showClose && (
                                <button className="absolute top-5 right-5 p-1 rounded hover:bg-slate-600 hover:bg-opacity-50" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </button>
                            )
                        }
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
