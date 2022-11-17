import Link from "next/link";

export function Navigation() {
    return (
        <div className="fixed w-full z-20 ease-in duration-300">
            <nav className="max-w-[1200px] mx-auto">
                <div className="flex justify-end">
                    <ul className="flex px-6 py-4 gap-10 bg-white text-prm-dark text-sm font-bold tracking-widest rounded-b shadow-md bg-opacity-60 hover:bg-opacity-100 transition-all duration-400">
                        <li><Link href="/" className="hover:text-palette-0 transition-all duration-400">Home</Link></li>
                        <li><Link href="/" className="hover:text-palette-0 transition-all duration-400">Skills</Link></li>
                        <li><Link href="/" className="hover:text-palette-0 transition-all duration-400">Projects</Link></li>
                        <li><Link href="/" className="hover:text-palette-0 transition-all duration-400">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}