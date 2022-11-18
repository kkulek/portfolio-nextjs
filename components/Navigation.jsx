import Link from "next/link";

export function Navigation() {
    return (
        <div
            className="fixed w-full px-10 sm:px-20 z-20 ease-in duration-300 bg-white shadow-md bg-opacity-90 hover:bg-opacity-100  transition-all duration-400">
            <div className="max-w-[1200px] mx-auto">
                <nav className="flex justify-between items-center py-2">
                    <Link href="#home"><img src="/img/logo/logo-dark.webp" alt="logo"
                                            className="w-[117px] h-[31px] w-full h-fit ml-[4px]"></img></Link>
                    <ul className="hidden md:flex px-6 gap-10 text-prm-dark text-sm font-bold tracking-widest">
                        <li>
                            <Link href="#home" className="hover:text-palette-0 transition-all duration-400">Home</Link>
                        </li>
                        <li>
                            <Link href="#skills"
                                  className="hover:text-palette-0 transition-all duration-400">Skills</Link>
                        </li>
                        <li>
                            <Link href="#projects"
                                  className="hover:text-palette-0 transition-all duration-400">Projects</Link>
                        </li>
                        <li>
                            <Link href="#contact"
                                  className="hover:text-palette-0 transition-all duration-400">Contact</Link>
                        </li>
                    </ul>
                    <button className="block md:hidden cursor-pointer group">
                        <span className="block w-6 h-1 bg-gray-600 mb-1 rounded"></span>
                        <span className="block w-6 h-1 bg-gray-600 mb-1 rounded"></span>
                        <span className="block w-6 h-1 bg-gray-600 mb-1 rounded"></span>
                        <div className=
                                 "absolute md:hidden top-0 -right-full h-fit w-3/5 border opacity-0 bg-white
                                 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul>
                                <li className="py-4 px-6 w-full hover:bg-slate-200 hover:text-palette-0 hover:font-bold transition-all duration-400">
                                    <Link href="#home">Home</Link>
                                </li>
                                <li className="py-4 px-6 w-full hover:bg-slate-200 hover:text-palette-0 hover:font-bold transition-all duration-400">
                                    <Link href="#skills">Skills</Link>
                                </li>
                                <li className="py-4 px-6 w-full hover:bg-slate-200 hover:text-palette-0 hover:font-bold transition-all duration-400">
                                    <Link href="#projects">Projects</Link>
                                </li>
                                <li className="py-4 px-6 w-full hover:bg-slate-200 hover:text-palette-0 hover:font-bold transition-all duration-400">
                                    <Link href="#contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </button>
                </nav>
            </div>
        </div>
    )
}