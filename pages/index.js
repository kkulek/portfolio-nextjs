import {Hero} from "../components/Hero";
import {Skills} from "../components/Skills";
import {Projects} from "../components/Projects";
import {Contact} from "../components/Contact";
import {Navigation} from "../components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <Hero/>
                <Skills/>
                <Projects/>
            </main>
            <Contact/>
        </>
    )
}
