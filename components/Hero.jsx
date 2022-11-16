import Link from "next/link";

export function Hero() {
    return (
        <section className="h-screen">
            <div className="flex flex-col h-full items-center justify-center gap-5 relative">
                <div className="absolute bottom-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-cyan-200 mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                <div className="absolute left-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-purple-300 mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-1000"></div>
                <div className="absolute top-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-yellow-200 mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute right-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-pink-300 mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-3000"></div>
                <h1 className="text-5xl font-bold tracking-wider">Frontend developer</h1>
                <p className="text-3xl font-light tracking-wider">with digital marketing background</p>
                <div className="space-x-4 mt-6">
                    <Link href="/" className="px-4 py-2 bg-slate-200 rounded">Projects</Link>
                    <Link href="/" className="px-4 py-2 bg-slate-50 rounded">Github</Link>
                </div>
            </div>
        </section>
    )
}