import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to upgrade your adhesive supply?</h2>
              <p className={styles.ctaDesc}>Get custom formulations, competitive pricing, and expert technical support.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className={styles.ctaBtnPrimary}>
                Get a Free Quote
              </Link>
              <Link to="/products" className={styles.ctaBtnOutline}>
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <span className={styles.logoIcon}>{'\u25B2'}</span>
                <div>
                  <span className={styles.logoName}>BIZFAM</span>
                  <span className={styles.logoSub}>PAKISTAN</span>
                </div>
              </Link>
              <p className={styles.tagline}>
                Pakistan's leading industrial adhesive manufacturer, trusted by pharma, packaging, and industrial
                sectors nationwide since 2005.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>ISO 9001:2015</span>
                <span className={styles.badge}>GMP Compliant</span>
                <span className={styles.badge}>Est. 2005</span>
              </div>
              <div className={styles.socials}>
                <a href="#" className={styles.social} aria-label="LinkedIn">
                  in
                </a>
                <a href="#" className={styles.social} aria-label="Facebook">
                  f
                </a>
                <a href="#" className={styles.social} aria-label="WhatsApp">
                  wa
                </a>
              </div>
            </div>

            <div className={styles.col}>
              <h5 className={styles.colTitle}>Company</h5>
              <ul className={styles.colList}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h5 className={styles.colTitle}>Products</h5>
              <ul className={styles.colList}>
                <li>
                  <Link to="/products">Pharmaceutical Adhesives</Link>
                </li>
                <li>
                  <Link to="/products">Industrial Bonding Agents</Link>
                </li>
                <li>
                  <Link to="/products">Packaging Glues</Link>
                </li>
                <li>
                  <Link to="/products">Hot Melt Adhesives</Link>
                </li>
                <li>
                  <Link to="/products">UV-Cure Adhesives</Link>
                </li>
                <li>
                  <Link to="/products">Custom Formulations</Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h5 className={styles.colTitle}>Get in Touch</h5>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>{'\u{1F4CD}'}</span>
                  <span>Industrial Zone, S.I.T.E. Area, Karachi, Sindh, Pakistan</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>{'\u260E'}</span>
                  <span>+92-21-XXXX-XXXX</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>{'\u2709'}</span>
                  <span>info@bizfampakistan.com</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>{'\u23F0'}</span>
                  <span>Mon - Sat: 9:00 AM - 6:00 PM PKT</span>
                </li>
              </ul>
              <Link to="/contact" className={styles.contactBtn}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>Copyright 2025 Bizfam Pakistan (Pvt.) Ltd. All rights reserved.</p>
            <p className={styles.taglineBottom}>Manufactured with precision. Trusted by industry.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
