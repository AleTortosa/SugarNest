import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop.jsx'

import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/home.jsx'
import { Contact } from './pages/Contact.jsx'
import { Menu } from './pages/Menu.jsx'
import { AvisoLegal } from './pages/legal/AvisoLegal.jsx'
import { Privacidad } from './pages/legal/Privacidad.jsx'
import { Cookies } from './pages/legal/Cookies.jsx'

export function App() {
    return (
        <BrowserRouter>

            <ScrollToTop/>
            
            <div className='app-container'>
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/aviso-legal" element={<AvisoLegal />} />
                        <Route path="/privacidad" element={<Privacidad />} />
                        <Route path="/cookies" element={<Cookies />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    )
}