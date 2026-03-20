import { Fragment, useState } from "react"
import "../styles/home.css"
import { Carrusel } from "../components/Carrusel.jsx"

/*Import fotos carrusel festivos*/
import roscon1 from '../assets/images/imagen-carrusel/roscon.jpeg'
import roscon2 from '../assets/images/imagen-carrusel/roscon2.jpeg'
import roscon3 from '../assets/images/imagen-carrusel/roscon3.jpeg'
import roscon4 from '../assets/images/imagen-carrusel/roscon4.jpeg'

/*Import fotos carrusel*/

export function Home() {
    const imagenes_festivo = [
        { src: roscon1 },
        { src: roscon2 },
        { src: roscon3 },
        { src: roscon4 }
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
        </Fragment >
    )
}