import {contactData} from "../data"
import Link from "next/link";

export function Contact() {
    return (
        <footer className="px-10 sm:px-20 bg-prm-dark relative h-screen md:h-fit">
            <div className="absolute w-full h-52 xl:h-56 bg-bottom-layer left-0 -top-48 bg-no-repeat bg-cover "></div>
            <div className="max-w-[1200px] mx-auto py-20 text-white space-y-6">
                    <h3 id="contact" className="text-6xl md:text-7xl font-bold tracking-wider">
                        {contactData.title}:
                    </h3>
                    <h4 className="text-5xl font-thin tracking-widest">{contactData.name}</h4>
                {/*<span className="hidden before:bg-icon-mail before:bg-icon-phone before:bg-icon-codewars before:bg-icon-github before:bg-icon-cv"></span>*/}
                <ul className="space-y-6">
                        {contactData.contact.map((item, index) => {
                            return (
                                <li key={index} className="relative">
                                    <Link href={item.link} target={item.target} className={`text-lg pl-10 before:absolute before:-ml-10 before:w-6 before:h-6 before:bg-icon-${item.icon} before:top-1/2 before:-translate-y-1/2 before:bg-contain before:bg-center before:bg-no-repeat`}>
                                        {item.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </footer>
    )
}