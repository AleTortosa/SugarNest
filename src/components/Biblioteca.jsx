/* 
  Biblioteca.jsx

  Muestra una biblioteca de imágenes para enseñar proyectos personales.

  Props:
  - imagenes: array de objetos { src }
*/

import { Fragment, useEffect, useState } from 'react';

export function Biblioteca({ imagenes }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const claseActivaImagen = activeIndex !== null
        ? "zoom-img"
        : "zoom-img cerrar-foto";

    function abrirFoto(srcFoto) {
        setActiveIndex(srcFoto);
    }

    function cerrarFoto() {
        setActiveIndex(null);
    }

    function fotoSiguiente(){
        setActiveIndex((prev) => (prev + 1) % imagenes.length);
    }

    function fotoAnterior(){
        setActiveIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    }

    useEffect(() => {
        if (activeIndex === null) return;

        const handler = (e) => {
            if (e.key === "Escape")
                cerrarFoto();
            if (e.key === "ArrowRight")
                fotoSiguiente();
            if (e.key === "ArrowLeft")
                fotoAnterior();
        };

        window.addEventListener("keydown", handler);

        return () => {
            window.removeEventListener("keydown", handler);
        };
    }, [activeIndex]);

    return (
        <Fragment>
            <div className={claseActivaImagen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 equis" style={{ width: '54px', height: '54px' }} onClick={() => cerrarFoto()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <img src={imagenes[activeIndex]?.src} />

                <div className='flechas'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='flecha' style={{ width: '70px', height: '70px' }} onClick={() => fotoAnterior()}>
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='flecha' style={{ width: '70px', height: '70px' }} onClick={() => fotoSiguiente()}>
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </div>



            </div>

            <div className='biblioteca-contenedor'>
                <div className="biblioteca-album">
                    {
                        imagenes.map(({ src }, index) => (
                            <div className="biblioteca-foto" key={`${src}-${index}`}>
                                <img alt={src} src={src} onClick={() => abrirFoto(index)} />
                            </div>
                        ))}
                </div>
            </div>
        </Fragment>
    )
}