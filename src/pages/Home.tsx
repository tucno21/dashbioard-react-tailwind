import { useState } from 'react';
import { RiMenuAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuBtn from './MenuBtn';


const Home = () => {
    const [activeMenu, setActiveMenu] = useState('Home');
    const [menuOpen, setmenuOpen] = useState(false);
    const menus = ['Home', 'Delivery', 'Pricing', 'FAQs', 'Contact'];

    // const menuRef = useRef(null);


    // const handleMouseEnter = ()=>{
    //     menuRef.current.
    // }

    const [menu1, setMenu1] = useState(false)
    const [menu2, setMenu2] = useState(false)
    const [menu3, setMenu3] = useState(false)
    const [menu4, setMenu4] = useState(false)
    const [menu5, setMenu5] = useState(false)
    const [menu6, setMenu6] = useState(false)

    return (
        <div className={`w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100 ${menuOpen ? 'overflow-hidden h-screen' : ''}`}>

            {/* NAVEGACION SUPERIOR */}
            <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
                {/* TITULO */}
                <a href="#" className="text-3xl md:text-4xl font-bold tracking-wide">
                    Ideas<span className="text-green-400">21</span>
                </a>

                <div className={`inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 ${menuOpen ? 'fixed flex' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
                        {menus.map((menu) => (
                            <li key={menu} className={`text-lg md:text-base lg:text-lg font-medium group ${activeMenu === menu ? 'text-green-500' : ''}`}>
                                <a href="#" onClick={() => setActiveMenu(menu)}>{menu}</a>
                                <div className="h-0.5 bg-green-400 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                            </li>
                        ))}
                    </ul>


                    <Link to={`auth/login`} className="flex justify-center items-center h-12 px-7 font-medium text-white bg-green-400 rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap">
                        Login
                    </Link>
                </div>

                {/* MUNU PARA CELULAR */}
                <div className="block md:hidden relative z-30" onClick={() => setmenuOpen(!menuOpen)}>
                    <MenuBtn estado={menuOpen} />
                </div>

            </nav>


            <div
                className="flex flex-col gap-8 py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
            >
                <p>Pagina de inicio y prueba</p>

                <div className="" onClick={() => setMenu1(!menu1)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-y-2.5 md:group-hover:rotate-45 ${menu1 ? 'translate-y-2.5 rotate-45' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:scale-0 ${menu1 ? 'scale-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-translate-y-2.5 md:group-hover:-rotate-45 ${menu1 ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
                    </button>
                </div>


                <div className="" onClick={() => setMenu2(!menu2)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
                        <span className={`block h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:w-4 md:group-hover:translate-y-1 md:group-hover:translate-x-4 md:group-hover:rotate-45 ${menu2 ? 'w-4 translate-y-1 translate-x-4 rotate-45' : 'w-8'}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full`}></span>
                        <span className={`block h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:w-4 md:group-hover:-translate-y-1 md:group-hover:translate-x-4 md:group-hover:-rotate-45 ${menu2 ? 'w-4 -translate-y-1 translate-x-4 -rotate-45' : 'w-8'}`}></span>
                    </button>
                </div>

                <div className="" onClick={() => setMenu3(!menu3)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
                        <span className={`block h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:w-4 md:group-hover:translate-y-1 md:group-hover:-rotate-45 ${menu3 ? 'w-4 translate-y-1 -rotate-45' : 'w-8'}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full`}></span>
                        <span className={`block h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:w-4 md:group-hover:-translate-y-1 md:group-hover:rotate-45 ${menu3 ? 'w-4 -translate-y-1 rotate-45' : 'w-8'}`}></span>
                    </button>
                </div>

                <div className="" onClick={() => setMenu4(!menu4)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group overflow-hidden">
                        <span className={`block w-6 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-y-2.5 md:group-hover:rotate-45 md:group-hover:w-8 ${menu4 ? 'w-8 translate-y-2.5 rotate-45' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-x-10  ${menu4 ? 'scale-0' : ''}`}></span>
                        <span className={`block w-4 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-translate-y-2.5 md:group-hover:rotate-[315deg] md:group-hover:w-8 ${menu4 ? 'w-8 -translate-y-2.5 rotate-[315deg]' : ''}`}></span>
                    </button>
                </div>

                <div className="" onClick={() => setMenu5(!menu5)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
                        <span className={`block w-4 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-y-[0.25rem] md:group-hover:translate-x-[.15rem] md:group-hover:rotate-45 ${menu5 ? 'translate-y-[0.25rem] translate-x-[.15rem] rotate-45' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-rotate-45 ${menu5 ? '-rotate-45' : ''}`}></span>
                        <span className={`block w-4 h-0.5 ml-auto bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-translate-y-[0.25rem] md:group-hover:-translate-x-[.15rem] md:group-hover:rotate-45 ${menu5 ? '-translate-y-[0.25rem] -translate-x-[0.15rem]  rotate-45' : ''}`}></span>
                    </button>
                </div>


                <div className="" onClick={() => setMenu6(!menu6)}>
                    <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
                        <span className={`block w-4 h-0.5 mx-auto bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-y-2.5 md:group-hover:rotate-45 md:group-hover:w-8 ${menu6 ? 'w-8 translate-y-2.5 rotate-45' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:scale-0 ${menu6 ? 'scale-0' : ''}`}></span>
                        <span className={`block w-4 h-0.5 mx-auto bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-translate-y-2.5 md:group-hover:-rotate-45 md:group-hover:w-8 ${menu6 ? 'w-8 -translate-y-2.5 -rotate-45' : ''}`}></span>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Home;



