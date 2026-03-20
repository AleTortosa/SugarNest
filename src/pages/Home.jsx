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
        </Fragment >
    )
}