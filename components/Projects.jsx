import {projects} from "../data";

export function Projects() {
    return (
        <section className="px-10 sm:px-20 py-32">
            <div className="mx-auto my-48 max-w-xl lg:max-w-[1400px]">
                <h2 className="text-6xl md:text-7xl font-bold max-w-[1200px] mx-auto">Projects:</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-24">
                    {projects.map((item, index) => {
                        const basePath = './img/';
                        return (
                            <article key={index}
                                     className="relative group
                                 [&>div]:h-full [&>div]:w-full [&>div]:transition-all [&>div]:duration-1000 [&>div]:rounded-xl">
                                <div
                                    className="absolute bg-gradient-to-r from-palette-0 via-palette-1 to-palette-2 inset-0.5 blur opacity-25 group-hover:opacity-30 group-hover:scale-105"></div>
                                <div className="relative bg-white group-hover:drop-shadow-xl">
                                    <img src={basePath + item.img} alt={`Project: ${item.name}`}
                                         className="w-full rounded-t-xl opacity-70 transition-all duration-1000 group-hover:opacity-100"/>
                                    <div className="p-6">
                                        <h3 className="transition-all duration-900 font-bold tracking-wider text-3xl mb-4 cursor-pointer">{item.name}</h3>
                                        <ul className="space-x-2">
                                            <hX>Stack:</hX>
                                            {item.stackArr.map((stack, index) =>
                                                (
                                                    <li key={index}
                                                        className="inline-block font-light px-1 py-1 bg-slate-100 rounded text-sm mb-4">
                                                        {stack}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        {/*<ul className="space-y-2 mb-4">*/}
                                        {/*    <hX>Key features:</hX>*/}
                                        {/*    {item.featuresArr.map((feature, index) =>*/}
                                        {/*        (*/}
                                        {/*            <li key={index}*/}
                                        {/*                className="font-light text-sm ml-4 relative before:absolute before:inset-1.5 before:-left-4 before:w-2 before:h-2 before:bg-slate-300 before:rounded-full">*/}
                                        {/*                {feature}*/}
                                        {/*            </li>*/}
                                        {/*        )*/}
                                        {/*    )}*/}
                                        {/*</ul>*/}
                                        <p className="font-thin text-lg mb-8">{item.short}</p>
                                        <div className="space-x-10 [&>a]:px-4 [&>a]:py-2 [&>a]:rounded">
                                            <a href="/" className="bg-amber-100">GitHub</a>
                                            <a href="/" className="bg-slate-100">Live Preview</a>
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