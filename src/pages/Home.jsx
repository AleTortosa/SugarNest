import { Fragment, useState } from "react"
import "../styles/home.css"
/*Import fotos carrusel festivos*/
import roscon1 from '../assets/images/imagen-carrusel/roscon.jpeg'
import roscon2 from '../assets/images/imagen-carrusel/roscon2.jpeg'
import roscon3 from '../assets/images/imagen-carrusel/roscon3.jpeg'
import roscon4 from '../assets/images/imagen-carrusel/roscon4.jpeg'

/*Import fotos carrusel*/

export function Home() {
    const [activeImg, setActiveImg] = useState(null);

    const claseActivaImagen = activeImg
    ? "zoom-img"
    : "zoom-img cerrar-foto";

    function fotoActiva(srcFoto){
        setActiveImg(srcFoto);
    }

    return (
        <Fragment>
            <section className="home-hero">
                <div className="hero-content">
                    <h1>Bienvenido a SugarNest</h1>
                    <p>La mejor pastelería de la ciudad</p>
                </div>
            </section>

            <section className="seleccion-festivo">
                <div className="festivo-content">
                    <h2>Selección navidad</h2>
                </div>

                <div className={claseActivaImagen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: '70px', height: '70px' }} onClick={() => fotoActiva(null)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <img src={activeImg}></img>
                </div>

                <div className="home-carrusel-container">
                    <div className="home-carrusel-track">
                        <div className="home-carrusel-item">
                            <img alt="foto 1" src={roscon1} onClick={() => fotoActiva(roscon1)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 2" src={roscon2} onClick={() => fotoActiva(roscon2)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 3" src={roscon3} onClick={() => fotoActiva(roscon3)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 4" src={roscon4} onClick={() => fotoActiva(roscon4)} />
                        </div>


                        <div className="home-carrusel-item">
                            <img alt="foto 1" src={roscon1} onClick={() => fotoActiva(roscon1)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 2" src={roscon2} onClick={() => fotoActiva(roscon2)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 3" src={roscon3} onClick={() => fotoActiva(roscon3)} />
                        </div>
                        <div className="home-carrusel-item">
                            <img alt="foto 4" src={roscon4} onClick={() => fotoActiva(roscon4)} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}