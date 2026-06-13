import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>▲</span>
          <div>
            <span className={styles.logoMain}>BIZFAM</span>
            <span className={styles.logoSub}>PAKISTAN</span>
          </div>
        </Link>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className={styles.cta}>Get Quote</Link>
          </li>
        </ul>
        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.x1 : ''}></span>
          <span className={menuOpen ? styles.x2 : ''}></span>
          <span className={menuOpen ? styles.x3 : ''}></span>
        </button>
      </div>
    </nav>
  )
}
