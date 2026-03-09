import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Home } from './pages/home.jsx'
import { Contact } from './pages/Contact.jsx'
import { Menu } from './pages/Menu.jsx'
import { Footer } from './components/Footer.jsx'

export function App() {
    return (
        <BrowserRouter>
            
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}