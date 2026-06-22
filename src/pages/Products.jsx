import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Products.module.css'

const categories = ['All']

const products = [
  {
    id: 1,
    category: 'All',
    name: 'GLUE GP 0001',
    tagline: 'Adhesive Solution',
    desc: 'High-performance general purpose glue designed for reliable bonding across multiple applications.',
    specs: { Type: 'Standard Glue', Usage: 'General Purpose', Quality: 'Premium Grade' },
    tags: ['Reliable', 'Versatile'],
    highlight: true,
  },
  {
    id: 2,
    category: 'All',
    name: 'N GLUE (HI BOND)',
    tagline: 'High-Strength Bonding Adhesive',
    desc: 'Enhanced formula providing superior bonding strength for demanding applications requiring maximum durability.',
    specs: { Type: 'Hi-Bond Adhesive', Strength: 'Maximum', Temperature: 'Wide Range' },
    tags: ['High Strength', 'Durable'],
    highlight: true,
  },
  {
    id: 3,
    category: 'All',
    name: 'TRANSPARENT GLUE (TP 0051)',
    tagline: 'Clear, Invisible Bond',
    desc: 'Crystal-clear adhesive that provides a transparent bond line, ideal for applications where visibility through the bond is required.',
    specs: { Type: 'Transparent Adhesive', Appearance: 'Crystal Clear', Application: 'Precision Bonding' },
    tags: ['Transparent', 'Clear Finish'],
    highlight: false,
  },
]

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.headerBg} />
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>/</span> Products
          </div>
          <h1 className={styles.pageTitle}>Product Catalog</h1>
          <p className={styles.pageDesc}>
            Industrial adhesive solutions engineered for performance. Browse our range of pharmaceutical,
            packaging, and industrial formulations.
          </p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map((cat) => (
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

      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((p) => (
              <div key={p.id} className={`${styles.card} ${p.highlight ? styles.highlighted : ''}`}>
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
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <Link to="/contact" className={styles.quoteBtn}>
                    Request Quote
                  </Link>
                  <Link to="/contact" className={styles.infoBtn}>
                    Technical Sheet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.customSection}>
        <div className="container">
          <div className={styles.customCard}>
            <div>
              <h4 className={styles.eyebrow}>Custom Formulation</h4>
              <h2>Don't see what you need?</h2>
              <p>
                Our R&D team engineers bespoke adhesive formulations to your exact specifications, including viscosity,
                bond strength, temperature range, and substrate compatibility.
              </p>
            </div>
            <Link to="/contact" className={styles.customBtn}>
              Talk to Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
