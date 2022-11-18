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
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="img/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
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
