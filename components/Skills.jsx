import {skills} from '../data';

export function Skills() {
    return (
        <div className="relative">
            <section className="bg-prm-dark px-10 sm:px-20">
                <div className="mx-auto py-32 md:py-48 max-w-[1200px]" id="skills">
                    <div className="flex flex-col justify-center text-white gap-40">
                        {/*<span className="hidden hover:after:bg-palette-0 hover:after:bg-palette-1 hover:after:bg-palette-2 hover:after:bg-palette-3 hover:after:bg-palette-4 hover:after:bg-palette-5 hover:after:bg-palette-6 hover:after:bg-palette-7"></span>*/}
                        {skills.map((type, index) => {
                            return (
                                <div className="w-fit" key={index}>
                                    <h2 className={`mb-4 w-fit text-6xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-palette-0 via-palette-1 to-palette-2`}>
                                        {type.title}:
                                    </h2>
                                    <div
                                        className="space-y-6 flex flex-wrap divide-x-2 divide-dashed divide-slate-700 max-w-3xl ml-4">
                                        {type.arr.map((item, index) => {
                                            return (
                                                index === 0
                                                    ? <p key={index}
                                                         className="font-thin text-2xl pr-6 pl-6 mt-6 inline-block">
                                                    <span className={`relative after:transition-colors after:duration-500 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-2 hover:after:bg-palette-${index} after:blur after:opacity-60`}>
                                                        {item.name}
                                                    </span>
                                                    </p>
                                                    : <p key={index} className="inline-block font-thin text-2xl pr-6 pl-6">
                                                    <span className={`relative after:transition-colors after:duration-500 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-2 hover:after:bg-palette-${index} after:blur after:opacity-60`}>
                                                        {item.name}
                                                    </span>
                                                    </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="z-10 absolute w-full h-52 xl:h-56 rotate-180 bg-bottom-layer left-0 -bottom-48 bg-no-repeat bg-cover bg-bottom"></div>
            </section>
        </div>
    )
}