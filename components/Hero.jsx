import Link from "next/link";
import {Button} from "./Button";

export function Hero() {
    return (
        <section id="home" className="h-screen">
            <div className="flex h-full items-center justify-center relative">
                <div className="absolute bottom-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-cyan-200 mix-blend-multiply filter blur-3xl opacity-90 animate-blob"></div>
                <div className="absolute left-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-purple-300 mix-blend-multiply filter blur-3xl opacity-90 animate-blob animation-delay-1000"></div>
                <div className="absolute top-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-yellow-200 mix-blend-multiply filter blur-3xl opacity-90 animate-blob animation-delay-2000"></div>
                <div className="absolute right-1/2 w-36 sm:w-52 sm:h-52 rounded-full bg-pink-300 mix-blend-multiply filter blur-3xl opacity-90 animate-blob animation-delay-3000"></div>
                <div className="z-10 -mt-20">
                    <h1 className="text-5xl font-bold tracking-wider">Frontend developer</h1>
                    <p className="text-3xl font-light tracking-wider">with digital marketing background</p>
                    <div className="space-x-4 mt-6">
                        <Button link="#projects">Projects</Button>
                        <Button link="https://github.com/kkulek" github>Github</Button>
                    </div>
                </div>
                <div className="absolute z-10 w-full h-52 xl:h-56 bg-bottom-layer -bottom-20 bg-no-repeat bg-cover bg-bottom"></div>
            </div>
        </section>
    )
}