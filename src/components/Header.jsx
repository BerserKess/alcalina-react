import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header (){
    const [menuOpen, setMenuOpen] = useState(false);

    // FUNÇÃO PARA ALTERNAR O ESTADO DO MENU
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className="px-8 w-screen py-5 flex flex-wrap items-center justify-between  fixed top-0 right-0 left-0 z-10 bg-blue-950">
            <h3 className="sm:text-xl md:text-2xl text-gray-200">
                Alcalina Contra a Poluição
            </h3>
            <nav className="hidden custom:flex gap-10 px-5 w-2/5 py-3 items-center justify-around border-2 border-blue-600 rounded-full text-gray-200 text-xl">
                <a className="hover:text-orange-500 transition-all duration-300 ease-in-out" href="#about">O Projeto</a>
                <a className="hover:text-orange-500 transition-all duration-300 ease-in-out" href="#gallery">Galeria</a>
                <a className="hover:text-orange-500 transition-all duration-300 ease-in-out" href="#members">Integrantes</a>
            </nav>


            <div className="custom:hidden text-3xl text-gray-200" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-blue-950 p-5 flex flex-col items-center gap-5 border-t-2 border-blue-600 custom:hidden">
                    <a className="hover:text-orange-500 text-gray-200 text-xl transition-all duration-300 ease-in-out" href="#about" onClick={toggleMenu}>O Projeto</a>
                    <a className="hover:text-orange-500 text-gray-200 text-xl transition-all duration-300 ease-in-out" href="#gallery" onClick={toggleMenu}>Galeria</a>
                    <a className="hover:text-orange-500 text-gray-200 text-xl transition-all duration-300 ease-in-out" href="#members" onClick={toggleMenu}>Integrantes</a>
                </div>
            )}
        </div>
    )
}