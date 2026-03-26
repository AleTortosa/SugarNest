import { Fragment, useState } from "react"
import "../styles/home.css"
import { Carrusel } from "../components/Carrusel.jsx"

/*Import fotos carrusel festivos*/
import roscon1 from '../assets/images/imagen-carrusel/roscon.jpeg'
import roscon2 from '../assets/images/imagen-carrusel/roscon2.jpeg'
import roscon3 from '../assets/images/imagen-carrusel/roscon3.jpeg'
import roscon4 from '../assets/images/imagen-carrusel/roscon4.jpeg'

/*Import fotos carrusel*/
import tarta1 from '../assets/images/imagen-carrusel/tarta-amor.jpeg'
import tarta2 from '../assets/images/imagen-carrusel/tarta-chocofresa.jpeg'
import tarta3 from '../assets/images/imagen-carrusel/tarta-dragon.jpeg'
import tarta4 from '../assets/images/imagen-carrusel/tarta-elegante.jpeg'
import tarta5 from '../assets/images/imagen-carrusel/tarta-foca.jpeg'
import tarta6 from '../assets/images/imagen-carrusel/tarta-harrypoter.jpeg'
import tarta7 from '../assets/images/imagen-carrusel/tarta-osito.jpeg'
import tarta8 from '../assets/images/imagen-carrusel/tarta-ranas.jpeg'
import tarta9 from '../assets/images/imagen-carrusel/tarta-rural.jpeg'
import tarta10 from '../assets/images/imagen-carrusel/tarta-taxi.jpeg'

export function Home() {
    const imagenes_festivo = [
        { src: roscon1 },
        { src: roscon2 },
        { src: roscon3 },
        { src: roscon4 }
    ];

    const imagenes_carrusel = [
        { src: tarta1 },
        { src: tarta2 },
        { src: tarta7 },
        { src: tarta8 },
        { src: tarta5 },
        { src: tarta10 },
    ];


    return (
        <Fragment>
            <section className="home-hero">
                <div className="hero-content">
                    <h1>Bienvenido a SugarNest</h1>
                    <p>La mejor pastelería de la ciudad</p>
                </div>
            </section>

            <section className="seleccion-festivo">
                <h2>Selección navidad</h2>

                <Carrusel imagenes={imagenes_festivo} />

                <button className="boton-principal">Ver toda la colección</button>
            </section>

            <section className="seleccion-festivo">
                <h2>Nuestras mejores tartas</h2>

                <Carrusel imagenes={imagenes_carrusel} />

                <button className="boton-principal">Ver todas las tartas</button>
            </section>

            <section className="seleccion-texto-home">
                <h2>Creando momentos especiales</h2>
                <p>
                    Aqui un texto del chatGPT que quede asi chulo como que en Sugarnest le damos color y sabor a tus dias especiales y que blablablabla
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>

            <section className="contacto-home">
                <h2>&iquest;Te interesa una tarta personalizada?</h2>
                <h3>
                    Escribeme y hablamos sobre tu idea
                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--light-pink)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px', height: '25px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </h3>
                <p>
                    <b><a href="https://wa.me/34621387716" target="_blank">
                        Whatsapp
                    </a></b>
                </p>
                <p>
                    <b><a href="https://instagram.com/sugarnest.bakery/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a></b>
                </p>
            </section>
        </Fragment >
    )
}