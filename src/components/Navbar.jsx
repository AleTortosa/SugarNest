import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import '../styles/Navbar.css'

export function Navbar() {
    const [menu, setMenu] = useState(false)

    const navClassName = menu
    ? 'navMenu activo'
    : 'navMenu'

    const icono = menu
    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" style={{ width: '48px', height: '48px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" style={{ width: '48px', height: '48px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


    function toggleMenu(){
        setMenu(prev => !prev)
    }
    
    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navTop'>
                    <button className='hamburguesa' onClick={toggleMenu}>{icono}</button>
                    <img className='logo' src="../assets/logo.png" alt="Logo" />
                </div>

                <ul className={navClassName}>
                    <li className='filaMenu'><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                    <li className='filaMenu'><Link to="/menu" onClick={toggleMenu}>Menú</Link></li>
                    <li className='logo-escritorio'><img src="../assets/logo.png" alt="Logo" className='logo'/></li>
                    <li className='filaMenu'><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}