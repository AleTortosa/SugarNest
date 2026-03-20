/* 
  ScrollToTop.jsx

  Sube la vista hasta arriba de la pantalla al ser llamada
*/
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [pathname])

  return null
}