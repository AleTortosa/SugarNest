/** Footer.jsx */
import { Link } from "react-router-dom"
import "../styles/footer.css"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>
                            <Link to="/">SugarNest</Link>
                        </h3>
                        <p>Pasteler&iacute;a artesanal</p>
                    </div>
                    <div className="footer-social">
                        <h3> Siguenos en redes sociales </h3>
                        <div className="links-redes">
                            <a href="https://instagram.com/sugarnest.bakery/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>

                            <a href="https://wa.me/34621387716" target="_blank">
                                <FaWhatsapp />
                            </a>

                            <a href="mailto:sugarnest.contacto@gmail.com">
                                <MdEmail />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>
                        <Link to="/aviso-legal">Aviso legal</Link>
                    </h4>  
                    <h3> 
                    <span>|</span>
                    </h3>
                    <h4>
                        <Link to="/privacidad">Privacidad</Link>
                    </h4>
                    <h3>
                    <span>|</span>
                    </h3>
                    <h4>
                        <Link to="/cookies">Cookies</Link>
                    </h4>
                </div>
            </div>
            <p className="copy">© 2026 SugarNest | Todos los derechos resservador</p>
        </footer>
    )
}