import Head from "next/head";
import {Hero} from "../components/Hero";
import {Skills} from "../components/Skills";
import {Projects} from "../components/Projects";
import {Contact} from "../components/Contact";
import {Navigation} from "../components/Navigation";

export default function Home() {
    return (
        <>
            <Head>
                <title>Krzysztof Kulka Portfolio</title>
                <meta name="description"
                      content="Frontend developer with digital marketing background ready for the next project!"/>
            </Head>
            <Navigation/>
            <main>
                <Hero/>
                <Skills/>
                <Projects/>
            </main>
            <Contact/>
        </>
    )
}
