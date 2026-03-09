import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import '../styles/Navbar.css'

export function Navbar() {
    const [menu, setMenu] = useState(false)

    const navClassName = menu
    ? 'navbar'
    : 'inactivo'

    const text = menu
    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


    function toggleMenu(){
        setMenu(!menu)
    }
    
    return (
        <Fragment>
            <button onClick={toggleMenu}>{text}</button>
            <nav className={navClassName}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/menu">Menú</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>

            <img src="../assets/logo.png" alt="Logo" className='logo' />
        </Fragment>
    )
}