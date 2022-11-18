import Link from "next/link";

export function Navigation() {
    return (
        <div className="fixed w-full px-10 sm:px-20 z-20 ease-in duration-300 bg-white shadow-md bg-opacity-60 hover:bg-opacity-100  transition-all duration-400">
            <nav className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="#home"><img src="/img/logo/logo-dark.webp" alt="logo" className="w-[117px] h-[31px] w-full h-fit ml-[4px]"></img></Link>
                    <ul className="flex px-6 py-4 gap-10 text-prm-dark text-sm font-bold tracking-widest">
                        <li><Link href="#home" className="hover:text-palette-0 transition-all duration-400">Home</Link></li>
                        <li><Link href="#skills" className="hover:text-palette-0 transition-all duration-400">Skills</Link></li>
                        <li><Link href="#projects" className="hover:text-palette-0 transition-all duration-400">Projects</Link></li>
                        <li><Link href="#contact" className="hover:text-palette-0 transition-all duration-400">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}