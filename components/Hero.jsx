import Link from "next/link";

export function Hero() {
    return (
        <section className="w-screen h-screen">
            <div className="flex flex-col h-full items-center justify-center gap-3">
                <h1 className="text-5xl font-bold tracking-wider">Frontend developer</h1>
                <p className="text-3xl font-light tracking-wider">with digital marketing background</p>
                <div className="space-x-4 mt-4">
                    <Link href="/" className="px-4 py-2 bg-slate-200 rounded">Projects</Link>
                    <Link href="/" className="px-4 py-2 bg-slate-50 rounded">Github</Link>
                </div>
            </div>
        </section>
    )
}