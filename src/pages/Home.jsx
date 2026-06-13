import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const stats = [
  { value: '18+', label: 'Years of Excellence' },
  { value: '200+', label: 'Industrial Clients' },
  { value: '50+', label: 'Product Formulations' },
  { value: '#1', label: 'In Pakistan Market' },
]

const industries = [
  { icon: '💊', name: 'Pharmaceutical', desc: 'GMP-grade adhesives for blister packs, tablet coating, and medical packaging trusted by leading pharma companies.' },
  { icon: '📦', name: 'Packaging', desc: 'High-bond solutions for carton sealing, lamination, and flexible packaging applications.' },
  { icon: '🏭', name: 'Industrial', desc: 'Heavy-duty bonding agents for assembly, manufacturing, and construction-grade applications.' },
  { icon: '📋', name: 'Labels & Printing', desc: 'Pressure-sensitive and specialty adhesives for label stock, tags, and print media.' },
]

const features = [
  { title: 'Pharma-Grade Certified', desc: 'Our adhesives meet international pharmaceutical manufacturing standards including GMP compliance.' },
  { title: 'Custom Formulations', desc: 'We engineer bespoke adhesive solutions tailored to your exact viscosity, temperature, and bond requirements.' },
  { title: 'Nationwide Delivery', desc: 'Reliable supply chain across all major cities in Pakistan — Karachi, Lahore, Islamabad, Faisalabad.' },
  { title: 'Technical Support', desc: 'Dedicated application engineers available to optimize adhesive performance for your production line.' },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.grid1}></div>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLabel}>
            <span className={styles.dot}></span>
            Pakistan's Leading Industrial Adhesive Manufacturer
          </div>
          <h1 className={styles.heroTitle}>
            Industrial<br />
            <span className={styles.accent}>Adhesives</span><br />
            Built for Pakistan
          </h1>
          <p className={styles.heroDesc}>
            Bizfam Pakistan engineers high-performance industrial glues trusted by 200+ companies across pharmaceutical, packaging, and manufacturing sectors. Precision-formulated. Rigorously tested.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/products" className={styles.btnPrimary}>Explore Products</Link>
            <Link to="/contact" className={styles.btnOutline}>Request a Quote</Link>
          </div>
          <div className={styles.heroTicker}>
            <span>Pharma Grade</span><span className={styles.sep}>◆</span>
            <span>Custom Formulations</span><span className={styles.sep}>◆</span>
            <span>ISO Certified</span><span className={styles.sep}>◆</span>
            <span>Nationwide Supply</span><span className={styles.sep}>◆</span>
            <span>GMP Compliant</span><span className={styles.sep}>◆</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            <div className={styles.visualIcon}>⬡</div>
            <div className={styles.visualLines}>
              {[...Array(5)].map((_, i) => <div key={i} className={styles.vLine} style={{'--delay': `${i * 0.2}s`}}></div>)}
            </div>
            <div className={styles.visualLabel}>MOLECULAR BOND STRENGTH</div>
            <div className={styles.visualBars}>
              {[90, 75, 95, 60, 85].map((v, i) => (
                <div key={i} className={styles.barWrap}>
                  <div className={styles.bar} style={{'--h': `${v}%`, '--delay': `${i * 0.15}s`}}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.value} className={styles.stat}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h4 className={styles.eyebrow}>Industries We Serve</h4>
            <h2 className={styles.sectionTitle}>Adhesive Solutions Across Every Sector</h2>
            <p className={styles.sectionDesc}>From sterile pharma environments to heavy-duty industrial assembly — our formulations are engineered for performance.</p>
          </div>
          <div className={styles.industryGrid}>
            {industries.map(ind => (
              <div key={ind.name} className={styles.industryCard}>
                <div className={styles.industryIcon}>{ind.icon}</div>
                <h3 className={styles.industryName}>{ind.name}</h3>
                <p className={styles.industryDesc}>{ind.desc}</p>
                <Link to="/products" className={styles.learnMore}>View Products →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresInner}>
            <div className={styles.featuresLeft}>
              <h4 className={styles.eyebrow}>Why Choose Bizfam</h4>
              <h2 className={styles.sectionTitle}>The Standard for Industrial Adhesives in Pakistan</h2>
              <p style={{color: 'var(--muted)', marginBottom: '32px', fontSize: '15px', lineHeight: '1.8'}}>
                With 18 years of formulation expertise, Bizfam Pakistan delivers adhesive products that exceed international quality standards while being optimized for Pakistani industrial conditions.
              </p>
              <Link to="/about" className={styles.btnPrimary}>Learn More About Us</Link>
            </div>
            <div className={styles.featuresRight}>
              {features.map(f => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureTick}>✓</div>
                  <div>
                    <h5 className={styles.featureTitle}>{f.title}</h5>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHARMA SPOTLIGHT */}
      <section className={styles.pharmaSection}>
        <div className="container">
          <div className={styles.pharmaCard}>
            <div className={styles.pharmaBadge}>PHARMA SECTOR LEADER</div>
            <h2 className={styles.pharmaTitle}>Trusted by Pakistan's Top Pharmaceutical Companies</h2>
            <p className={styles.pharmaDesc}>Our pharmaceutical-grade adhesives are the go-to choice for blister packaging, label adhesion, carton sealing, and tablet coating. Formulated under GMP conditions with full traceability and lot documentation.</p>
            <div className={styles.pharmaFeats}>
              {['USP/EP Compliant', 'Full Batch Traceability', 'Low Migration Formula', 'Clean Room Compatible'].map(f => (
                <span key={f} className={styles.pharmaFeat}>{f}</span>
              ))}
            </div>
            <Link to="/contact" className={styles.btnAccent}>Talk to Our Pharma Specialist</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
