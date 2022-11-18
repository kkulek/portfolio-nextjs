import Link from "next/link";
import {useState} from "react";
import { Menu, Close } from 'react-ionicons'

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollable, setIsScrollable] = useState(true);

    const handleHamburger = () => {
        setIsOpen(!isOpen)
        isScrollable ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
        setIsScrollable(!isScrollable)
    }

    const navLinks = [
        {name: "Home", link: "#home"},
        {name: "Skills", link: "#skills"},
        {name: "Projects", link: "#projects"},
        {name: "Contact", link: "#contact"},
    ];

    return (
        <div
            className="fixed w-full px-10 sm:px-20 z-20 ease-in duration-300 bg-white shadow-md bg-opacity-90 hover:bg-opacity-100 transition-all duration-400">
            <div className="max-w-[1200px] mx-auto">
                <nav className="flex justify-between items-center py-2">
                    <Link href="#home">
                        <img src="/img/logo/logo-dark.webp" alt="logo"
                             className="w-[117px] h-[31px] w-full h-fit ml-[4px]">
                        </img>
                    </Link>
                    <div className="absolute right-10 cursor-pointer md:hidden text-3xl" onClick={handleHamburger}>
                        {isOpen ? <Close/> : <Menu/>}
                    </div>
                    <ul className={`bg-white md:bg-transparent flex flex-col items-center md:flex-row absolute md:static 
                    top-11 -right-full w-full md:w-auto h-screen md:h-auto pt-10 md:pt-0 gap-12 text-prm-dark text-sm font-bold tracking-widest
                    transition-all duration-200 ease-in opacity-0 md:opacity-100 
                    ${isOpen? 'right-0 opacity-100 overflow-hidden' : '-right-full opacity-0'}`}
                    >
                        {navLinks.map((item, index) =>
                            <li key={index}>
                                <Link href={item.link}
                                      className="hover:text-palette-0 transition-all duration-400 px-8 py-2 md:px-0 md:py-0" onClick={handleHamburger}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}