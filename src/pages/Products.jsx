import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Products.module.css'

const categories = ['All', 'Pharmaceutical', 'Packaging', 'Industrial', 'Specialty']

const products = [
  {
    id: 1, category: 'Pharmaceutical',
    name: 'PharmaBond PG-100',
    tagline: 'GMP-Grade Blister Pack Adhesive',
    desc: 'Ultra-clean adhesive formulated specifically for pharmaceutical blister packaging. USP/EP compliant with full batch traceability.',
    specs: { 'Viscosity': '5,000–8,000 cPs', 'Temp Range': '-10°C to 80°C', 'Open Time': '30–45 sec', 'Set Time': '2–4 min' },
    tags: ['GMP Certified', 'USP Compliant', 'Low Migration'],
    highlight: true,
  },
  {
    id: 2, category: 'Pharmaceutical',
    name: 'PharmaBond PG-200',
    tagline: 'Tablet Coating & Label Adhesive',
    desc: 'Precision-engineered for pharmaceutical label adhesion and tablet coating processes. Clean-room compatible formula.',
    specs: { 'Viscosity': '2,000–4,000 cPs', 'Temp Range': '5°C to 60°C', 'Open Time': '20–30 sec', 'Set Time': '1–2 min' },
    tags: ['Clean Room Safe', 'EP Grade', 'Solvent-Free'],
    highlight: false,
  },
  {
    id: 3, category: 'Packaging',
    name: 'PackSeal Pro-400',
    tagline: 'High-Speed Carton Sealing',
    desc: 'Designed for high-throughput carton sealing lines. Excellent cold-temperature performance for refrigerated packaging.',
    specs: { 'Viscosity': '15,000–20,000 cPs', 'Temp Range': '-25°C to 50°C', 'Open Time': '10–15 sec', 'Set Time': '30–60 sec' },
    tags: ['High Speed', 'Cold Temp', 'Food Safe'],
    highlight: false,
  },
  {
    id: 4, category: 'Packaging',
    name: 'LamiFlex L-550',
    tagline: 'Flexible Film Lamination',
    desc: 'Solvent-free lamination adhesive for flexible packaging. Excellent bond strength on BOPP, PET, PE, and aluminum foil substrates.',
    specs: { 'Viscosity': '800–1,200 cPs', 'Temp Range': '15°C to 70°C', 'Open Time': '45–60 sec', 'Set Time': '8–12 hrs' },
    tags: ['Solvent-Free', 'Multi-Substrate', 'Food Grade'],
    highlight: false,
  },
  {
    id: 5, category: 'Industrial',
    name: 'InduraBond IB-700',
    tagline: 'Heavy-Duty Structural Adhesive',
    desc: 'High-strength structural adhesive for metal-to-metal, metal-to-plastic, and composite bonding in demanding industrial environments.',
    specs: { 'Viscosity': '50,000–80,000 cPs', 'Temp Range': '-30°C to 120°C', 'Open Time': '15–25 min', 'Set Time': '24 hrs' },
    tags: ['High Strength', 'Temperature Resistant', 'Vibration Proof'],
    highlight: true,
  },
  {
    id: 6, category: 'Industrial',
    name: 'InduraBond IB-800 Epoxy',
    tagline: 'Two-Component Structural Epoxy',
    desc: '2-component epoxy adhesive offering maximum shear strength for metal fabrication, construction, and heavy machinery assembly.',
    specs: { 'Mix Ratio': '1:1 (A:B)', 'Temp Range': '-40°C to 150°C', 'Open Time': '5–8 min', 'Full Cure': '24–48 hrs' },
    tags: ['2-Component', 'Max Strength', 'Chemical Resistant'],
    highlight: false,
  },
  {
    id: 7, category: 'Specialty',
    name: 'ThermoFuse TF-300',
    tagline: 'Hot Melt Adhesive Pellets',
    desc: 'EVA-based hot melt adhesive pellets engineered for book binding, woodworking, and general assembly. Consistent flow at all application temperatures.',
    specs: { 'Form': 'Pellets / Sticks', 'Application Temp': '160–180°C', 'Open Time': '8–12 sec', 'Color': 'Amber/Clear' },
    tags: ['Hot Melt', 'EVA Based', 'Fast Set'],
    highlight: false,
  },
  {
    id: 8, category: 'Specialty',
    name: 'ClearBond UV-100',
    tagline: 'UV-Curable Optical Adhesive',
    desc: 'Crystal-clear UV-curing adhesive for glass bonding, optical assemblies, and electronics. Cures in seconds under UV/LED exposure.',
    specs: { 'Viscosity': '200–500 cPs', 'Cure Time': '5–15 sec (UV)', 'Temp Range': '-20°C to 100°C', 'Color': 'Water Clear' },
    tags: ['UV Cure', 'Optical Grade', 'Crystal Clear'],
    highlight: false,
  },
]

export default function Products() {
  const [active, setActive] = useState('All')
  const [hover, setHover] = useState(null)

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <section className={styles.header}>
        <div className={styles.headerBg}></div>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>/</span> Products
          </div>
          <h1 className={styles.pageTitle}>Product Catalog</h1>
          <p className={styles.pageDesc}>Industrial adhesive solutions engineered for performance. Browse our complete range of pharmaceutical, packaging, and industrial formulations.</p>
        </div>
      </section>

      {/* FILTER */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
            <div className={styles.resultCount}>{filtered.length} products</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map(p => (
              <div
                key={p.id}
                className={`${styles.card} ${p.highlight ? styles.highlighted : ''}`}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
              >
                {p.highlight && <div className={styles.highlightBadge}>Best Seller</div>}
                <div className={styles.cardTop}>
                  <span className={styles.catBadge}>{p.category}</span>
                  <h3 className={styles.productName}>{p.name}</h3>
                  <p className={styles.productTagline}>{p.tagline}</p>
                  <p className={styles.productDesc}>{p.desc}</p>
                </div>
                <div className={styles.specs}>
                  <h5 className={styles.specTitle}>Technical Specifications</h5>
                  <div className={styles.specGrid}>
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} className={styles.specItem}>
                        <span className={styles.specKey}>{k}</span>
                        <span className={styles.specVal}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.cardFooter}>
                  <Link to="/contact" className={styles.quoteBtn}>Request Quote</Link>
                  <Link to="/contact" className={styles.infoBtn}>Technical Sheet</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM FORMULATION CTA */}
      <section className={styles.customSection}>
        <div className="container">
          <div className={styles.customCard}>
            <div>
              <h4 className={styles.eyebrow}>Custom Formulation</h4>
              <h2>Don't See What You Need?</h2>
              <p>Our R&D team engineers bespoke adhesive formulations to your exact specifications — viscosity, bond strength, temperature range, substrate compatibility, and more.</p>
            </div>
            <Link to="/contact" className={styles.customBtn}>Talk to Our Engineers</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
