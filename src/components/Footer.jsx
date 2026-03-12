/** Footer.jsx */
import { Link } from "react-router-dom"
import "../styles/footer.css"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>
                        <Link to="/">SugarNest</Link>
                    </h3>
                    <p>Pasteler&iacute;a artesanal</p>
                </div>
                <div className="footer-social">
                    <p> Siguenos en redes sociales </p>
                    <div className="links-redes">
                        <a href="https://instagram.com/sugarnest.bakery/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>

                        <a href="https://wa.me/34621387716" target="_blank">
                            <FaWhatsapp />
                        </a>

                        <a href="mailto:contacto@sugarnest.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <Link to="/aviso-legal">Aviso legal</Link>
                    <span>|</span>
                    <Link to="/privacidad">Privacidad</Link>
                    <span>|</span>
                    <Link to="/cookies">Cookies</Link>
                </div>
            </div>
            <p className="copy">© 2026 SugarNest</p>
        </footer>
    )
}