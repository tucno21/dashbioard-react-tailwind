import { useContext } from 'react';
import { DashboardContext } from '../../context/dasboard/DashboardContext';

export const PageContainer = ({ children }: any) => {

    const { sidebarIcon } = useContext(DashboardContext);

    return (
        <div className={`container-page  ${sidebarIcon ? 'page-icon' : 'page-not-icon'}`}>
            {children}
        </div>
    )
}
