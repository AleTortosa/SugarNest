/* 
  Biblioteca.jsx

  Muestra una biblioteca de imágenes para enseñar proyectos personales.

  Props:
  - imagenes: array de objetos { src }
*/

import { Fragment, useState } from 'react';

export function Biblioteca( {imagenes} ) {
    const [activeImg, setActiveImg] = useState(null);

    const claseActivaImagen = activeImg
        ? "zoom-img"
        : "zoom-img cerrar-foto";

    function fotoActiva(srcFoto) {
        setActiveImg(srcFoto);
    }

    return (
        <Fragment>
            <div className={claseActivaImagen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" style={{ width: '54px', height: '54px' }} onClick={() => fotoActiva(null)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <img src={activeImg}></img>
            </div>

            <div className='biblioteca-contenedor'>
                <div className="biblioteca-album">
                    {
                        imagenes.map(({ src }, index) => (
                            <div className="biblioteca-foto" key={`${src}-${index}`}>
                                <img alt={src} src={src} onClick={() => fotoActiva(src)} />
                            </div>
                        ))}
                </div>
            </div>
        </Fragment>
    )
}