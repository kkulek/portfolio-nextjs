import {projects} from "../data";
import {Button} from "./Button";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export function Projects() {
    return (
        <section className="px-10 sm:px-20 py-32" id="projects">
            <div className="mx-auto my-48 max-w-xl lg:max-w-[1400px]">
                <h2 className="text-6xl md:text-7xl font-bold max-w-[1200px] mx-auto">Projects:</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-24">
                    {projects.map((item, index) => {
                        const basePath = '/img/projects/';
                        return (
                            <article key={index}
                                     className="relative group
                                 [&>div]:h-full [&>div]:w-full [&>div]:transition-all [&>div]:duration-1000 [&>div]:rounded-xl">
                                <div
                                    className="absolute bg-gradient-to-r from-palette-0 via-palette-1 to-palette-2 inset-0.5 blur opacity-25 group-hover:opacity-30 group-hover:scale-105"></div>
                                <div className="relative bg-white group-hover:drop-shadow-xl">
                                    <Link href={item.link.live} target="_blank" rel="noreferrer">
                                        <ExportedImage src={basePath + item.img} width={600} height={300} alt={`Project: ${item.name} `}
                                             className="w-[600px] w-full h-fit rounded-t-xl opacity-70 transition-all duration-1000 group-hover:opacity-100"/>
                                    </Link>
                                    <div className="p-6">
                                        <Link href={item.link.live} target="_blank" rel="noreferrer" className="inline-block">
                                            <h3 className="transition-all duration-900 font-bold tracking-wider text-3xl mb-4 cursor-pointer">{item.name}
                                            </h3>
                                        </Link>
                                        <div className="flex gap-2">
                                            <span>Stack:</span>
                                            <ul className="space-x-2">
                                                {item.stackArr.map((stack, index) =>
                                                    (
                                                        <li key={index}
                                                            className="inline-block font-light px-1 py-1 bg-slate-100 rounded text-sm mb-4">
                                                            {stack}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <p className="font-thin text-lg mb-8">{item.short}</p>
                                        <div className="space-x-4 mt-6">
                                            <Button link={item.link.live} target="_blank">Preview</Button>
                                            <Button link={item.link.github} github>Repo</Button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}