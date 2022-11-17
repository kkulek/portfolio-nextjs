export function Button({link, github, children, target}) {
    return (
        github
            ? <a href={link} target="_blank"
                 className="inline-block relative pl-6 pr-4 py-2 bg-prm-dark text-white tracking-widest rounded shadow-xl border-2 border-prm-dark
                 before:absolute before:w-5 before:h-5 before:bg-icon-github before:bg-center before:bg-contain before:bg-no-repeat before:-ml-4 before:top-1/4 hover:before:animate-smallRotate">
                <span className="ml-3">{children}</span>
            </a>
            : <a href={link} target={target} className="inline-block relative px-6 py-2 bg-prm-dark text-white tracking-widest rounded shadow-xl border-2 border-amber-50
            bg-gradient-to-br from-palette-0 via-palette-1 to-palette-2 hover:to-palette-4">{children}</a>
    )
}