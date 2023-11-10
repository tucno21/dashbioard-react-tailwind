import { Outlet } from "react-router-dom"
import NavbarContainer from "../components/dashboard/NavbarContainer"
import { PageContainer } from "../components/dashboard/PageContainer"
import { Sidebar } from "../components/dashboard/Sidebar"
import { DashboardProvider } from "../context/dasboard/DashboardContext"
import { menuItems } from "../routes/LinksDashboard"
import { TitleSidebar } from "../Interfaces/DashboardInterface"
import { BsShop } from 'react-icons/bs';

const DashboardLayout = () => {

    const TitleSidebar: TitleSidebar = {
        icon: <BsShop className="" />,
        // icon: <BsShop className="item-icon" />,
        title: 'Venta',
    }

    const signout = () => {
        console.log('signout');
    }

    return (
        <DashboardProvider>
            <div className="h-screen flex">
                <Sidebar menuItems={menuItems} titleSidebar={TitleSidebar} />
                <PageContainer>
                    {/* Navbar */}
                    <NavbarContainer username="Carlos" rol='Administrador' signout={signout} />
                    <div className="mt-14 bg-[#f7f7f7]">
                        <Outlet />
                    </div>
                </PageContainer>
            </div>
        </DashboardProvider>
    )
}

export default DashboardLayout