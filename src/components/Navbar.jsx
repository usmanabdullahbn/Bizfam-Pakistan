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

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

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
          <span className={styles.logoIcon}>{'\u25B2'}</span>
          <div>
            <span className={styles.logoMain}>BIZFAM</span>
            <span className={styles.logoSub}>PAKISTAN</span>
          </div>
        </Link>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={menuOpen ? styles.x1 : ''}></span>
          <span className={menuOpen ? styles.x2 : ''}></span>
          <span className={menuOpen ? styles.x3 : ''}></span>
        </button>

        <button
          className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        />

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`} id="primary-navigation">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className={styles.cta}>
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
