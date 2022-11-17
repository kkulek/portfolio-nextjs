export function Button({link, github, children, target}) {
    return (
        github
            ? <a href={link} target="_blank"
                 className="inline-block relative pl-6 pr-4 py-2 bg-prm-dark text-white tracking-widest rounded shadow-lg
                 before:absolute before:w-5 before:h-5 before:bg-icon-github before:bg-center before:bg-contain before:bg-no-repeat before:-ml-4 before:top-1/4 hover:before:animate-smallRotate">
                <span className="ml-3">Github</span>
            </a>
            : <a href={link} className="px-4 py-2 bg-slate-200 rounded">{children}</a>
    )
}