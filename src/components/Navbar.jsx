/** componente Navbar.jsx */

import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logoSugarNest.png'

export function Navbar() {
    const [menu, setMenu] = useState(false)

    const navClassName = menu
    ? 'navMenu activo'
    : 'navMenu'

    const icono = menu
    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" style={{ width: '35px', height: '35px' }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


    function toggleMenu(){
        setMenu(!menu)
    }
    
    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navTop'>
                    <button className='hamburguesa' aria-label='Menu' onClick={toggleMenu}>{icono}</button>
                    <Link to="/">
                        <img src={logo} alt="Logo" className='logo'/>
                    </Link>
                </div>

                <ul className={navClassName}>
                    <li className='filaMenu'>
                        <Link to="/" onClick={toggleMenu}>P&aacute;gina principal</Link>
                    </li>      
                    <li className='filaMenu'>
                        <Link to="/" onClick={toggleMenu}>Proyectos</Link>
                    </li>                                         
                        
                    <li className='logo-escritorio'>
                        <Link to="/">
                            <img src={logo} alt="Logo" className='logo'/>
                        </Link>
                    </li>

                    <li className='filaMenu'>
                        <Link to="/menu" onClick={toggleMenu}>Interior tartas</Link>
                    </li>     
                    <li className='filaMenu'>
                        <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
                    </li>                    
                </ul>
            </nav>
        </Fragment>
    )
}