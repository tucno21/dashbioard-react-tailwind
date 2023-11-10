import React, { useContext, useState } from 'react';
import { DashboardContext } from '../../context/dasboard/DashboardContext';
import { BsGrid1X2, BsPersonCircle, BsPersonBadgeFill, BsBoxArrowInLeft, BsKey } from 'react-icons/bs';

interface NavbarContainerProps {
    username: string;
    rol: string;
    signout: () => void;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ username, rol, signout }) => {

    const [hidden, setHidden] = useState(true);
    const { sidebarIcon, toggleSidebar, toggleSidebarOpen } = useContext(DashboardContext);

    const handleHidden = () => {
        setHidden(!hidden);
    }

    return (
        <div className={`navbar-container ${sidebarIcon ? 'nc-3' : 'nc-15'}`}>
            <div className="menuBar" >
                <BsGrid1X2 className="menu-phone w-10 h-10" onClick={toggleSidebarOpen} />
                <BsGrid1X2 className="menu-tablet w-10 h-10" onClick={toggleSidebar} />
            </div>
            <div className="menu-user">
                <div className="info-user" onClick={handleHidden}>
                    <span>{username}</span>
                    <BsPersonCircle className="text-xl" />
                </div>
                <div className={`option-user ${hidden ? 'hidden' : ''}`}>
                    <p className="option-item">
                        <BsPersonBadgeFill />
                        <span>{rol}</span>
                    </p>
                    <button type='button' className="option-item" onClick={signout}>
                        <BsBoxArrowInLeft />
                        <span>Logout</span>
                    </button>
                    <a href="#" className="option-item">
                        <BsKey />
                        <span>Password</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavbarContainer;
