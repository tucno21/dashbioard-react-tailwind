import { createContext, useState, useEffect } from "react";


export const DashboardInitialState = {
    sidebarIcon: false,
    sidebarOpen: false,
    subMenuOpen: false,
}

export interface DashboardContextProps {
    sidebarIcon: boolean;
    toggleSidebar: () => void;
    setSidebarIcon: (value: boolean) => void;

    sidebarOpen: boolean;
    toggleSidebarOpen: () => void;

    subMenuOpen: boolean;
    toggleSubMenu: () => void;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export const DashboardProvider = ({ children }: any) => {

    const [sidebarIcon, setSidebarIcon] = useState(DashboardInitialState.sidebarIcon);
    const [sidebarOpen, setSidebarOpen] = useState(DashboardInitialState.sidebarOpen);
    const [subMenuOpen, setSubMenuOpen] = useState(DashboardInitialState.subMenuOpen);

    useEffect(() => {
        //obtenert el valor de localstorage de sidebarIcon
        const localSidebarIcon = localStorage.getItem("sidebarIcon");
        if (localSidebarIcon === null) {
            //si no hay valor en localstorage setear el valor por defecto en el state de sidebarIcon
            localStorage.setItem("sidebarIcon", JSON.stringify(DashboardInitialState.sidebarIcon));
        } else {
            //si existe valor en localstorage setearlo en el state de sidebarIcon
            setSidebarIcon(JSON.parse(localSidebarIcon))
        }
    }, []);

    const toggleSidebar = () => {
        setSidebarIcon(!sidebarIcon);
        //cambiar el valor de localstorage
        localStorage.setItem("sidebarIcon", JSON.stringify(!sidebarIcon));
    }

    const toggleSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    }


    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }

    return (
        <DashboardContext.Provider value={{
            sidebarIcon,
            toggleSidebar,
            setSidebarIcon,

            sidebarOpen,
            toggleSidebarOpen,

            subMenuOpen,
            toggleSubMenu,
        }}>
            {children}
        </DashboardContext.Provider>
    )
}