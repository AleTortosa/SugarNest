import { Fragment } from "react";
import { Biblioteca } from "../components/Biblioteca";
import '../styles/proyectos.css'

/*Import fotos*/
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

export function Proyectos() {
    const biblioteca_fotos = [
        { src: tarta1 },
        { src: tarta2 },
        { src: tarta3 },
        { src: tarta4 },
        { src: tarta5 },
        { src: tarta6 },
        { src: tarta7 },
        { src: tarta8 },
        { src: tarta9 },
        { src: tarta10 },
        
    ];
    return (
        <Fragment>
            <section className="section-proyectos">
                <h1>
                    Proyectos
                </h1>
                <h2>
                    Algunos de mis trabajos
                </h2>

                <Biblioteca imagenes={biblioteca_fotos} />
            </section>
        </Fragment>
    )
}