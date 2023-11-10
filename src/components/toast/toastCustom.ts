interface Toast {
    status: 'success' | 'error' | 'warning' | 'info'
    message: string;
    timer?: number;
    bgColor?: boolean
}

const alertIcon = (icon: string, width: number, height: number): SVGSVGElement => {

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 16 16");

    const iconStyle: Record<string, string> = {
        success: "bi bi-check-circle",
        error: "bi bi-x-circle",
        warning: "bi bi-exclamation-circle",
        info: "bi bi-info-circle",
        question: "bi bi-question-circle",
    };
    svg.setAttribute("class", iconStyle[icon]);

    // Crear el elemento <path> dentro del elemento <svg>
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

    // Crear el elemento <path> dentro del elemento <svg>
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const iconMappings: Record<string, string> = {
        success: "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z",
        error: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
        warning: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z",
        info: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
        question: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
    };
    path2.setAttribute("d", iconMappings[icon]);

    // Añadir los elementos <path> al elemento <svg>
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
}

const toastPersonalizado = ({ status, message, timer = 4000, bgColor = true }: Toast) => {
    const toast = document.querySelector("#toastTailwind");
    if (toast) {
        toast.remove();
    }

    createHtmlToast(status, message, bgColor);

    setTimeout(() => {
        const toast = document.querySelector("#toastTailwind");
        if (toast) {
            toast.remove();
        }
    }, timer);
}

export default toastPersonalizado;

const color = {
    success: '#07BC0C',
    error: '#E74C3C',
    warning: '#F1C40F',
    info: '#3498DB',
}

const styleStatus = {
    success: ['border-none', `bg-[${color.success}]`, 'text-white'],
    error: ['border-none', `bg-[${color.error}]`, 'text-white'],
    warning: ['border-none', `bg-[${color.warning}]`, 'text-white'],
    info: ['border-none', `bg-[${color.info}]`, 'text-white'],
};

const styleStatusBorder = {
    success: [`border-[${color.success}]`, `bg-green-50`, `text-[${color.success}]`],
    error: [`border-[${color.error}]`, `bg-red-50`, `text-[${color.error}]`],
    warning: [`border-[${color.warning}]`, `bg-yellow-50`, `text-[${color.warning}]`],
    info: [`border-[${color.info}]`, `bg-blue-50`, `text-[${color.info}]`],
}


const createHtmlToast = (status: Toast["status"], message: Toast["message"], bgColor: Toast["bgColor"]) => {
    const body = document.querySelector("body");

    // Crear el elemento contenedor principal <div class="fixed top-10 right-2 z-50">
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("fixed", "top-10", "right-2", "z-50");
    //agregar un id
    mainDiv.setAttribute("id", "toastTailwind");

    // Crear el elemento secundario 
    const childDiv = document.createElement("div");
    childDiv.classList.add("animation-sacudiendo", "flex", "justify-center", "items-center", "gap-2", "px-3", "py-2", "text-sm", "border", "rounded-lg", "max-w-sm", "shadow-lg", ...(bgColor ? styleStatus[status] : styleStatusBorder[status]));

    const svg = alertIcon(status, 35, 35);

    // Crear el elemento <div> para el mensaje
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;

    // Añadir el elemento <svg> y el elemento <div> al elemento secundario <div>
    childDiv.appendChild(svg);
    childDiv.appendChild(messageDiv);

    // Añadir el elemento secundario
    mainDiv.appendChild(childDiv);

    // Añadir el elemento principal al body
    body?.appendChild(mainDiv);
}