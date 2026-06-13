import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '200+', label: 'Industrial Clients' },
  { value: '50+', label: 'Product Formulations' },
  { value: '#1', label: 'Market Position in Pakistan' },
]

const industries = [
  {
    icon: '\u2697',
    name: 'Pharmaceutical',
    desc: 'GMP-grade adhesives for blister packs, tablet coating, and medical packaging trusted by leading pharma companies.',
  },
  {
    icon: '\u25A3',
    name: 'Packaging',
    desc: 'High-bond solutions for carton sealing, lamination, and flexible packaging applications.',
  },
  {
    icon: '\u26CF',
    name: 'Industrial',
    desc: 'Heavy-duty bonding agents for assembly, manufacturing, and construction-grade applications.',
  },
  {
    icon: '\u270F',
    name: 'Labels & Printing',
    desc: 'Pressure-sensitive and specialty adhesives for label stock, tags, and print media.',
  },
]

const features = [
  {
    title: 'Pharma-Grade Certified',
    desc: 'Our adhesives meet international pharmaceutical manufacturing standards including GMP compliance.',
  },
  {
    title: 'Custom Formulations',
    desc: 'We engineer bespoke adhesive solutions tailored to your exact viscosity, temperature, and bond requirements.',
  },
  {
    title: 'Nationwide Delivery',
    desc: 'Reliable supply across Karachi, Lahore, Islamabad, Faisalabad, and the wider Pakistan market.',
  },
  {
    title: 'Technical Support',
    desc: 'Dedicated application engineers available to optimize adhesive performance for your production line.',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.grid1} />
          <div className={styles.orb1} />
          <div className={styles.orb2} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroLabel}>
              <span className={styles.dot} />
              Pakistan's leading industrial adhesive manufacturer
            </div>
            <h1 className={styles.heroTitle}>
              Industrial
              <br />
              <span className={styles.accent}>Adhesives</span>
              <br />
              Built for Pakistan
            </h1>
            <p className={styles.heroDesc}>
              Bizfam Pakistan engineers high-performance industrial glues trusted by 200+ companies across
              pharmaceutical, packaging, and manufacturing sectors.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/products" className={styles.btnPrimary}>
                Explore Products
              </Link>
              <Link to="/contact" className={styles.btnOutline}>
                Request a Quote
              </Link>
            </div>
            <div className={styles.heroTicker}>
              <span>Pharma Grade</span>
              <span className={styles.sep}>{'\u2022'}</span>
              <span>Custom Formulations</span>
              <span className={styles.sep}>{'\u2022'}</span>
              <span>ISO Certified</span>
              <span className={styles.sep}>{'\u2022'}</span>
              <span>Nationwide Supply</span>
              <span className={styles.sep}>{'\u2022'}</span>
              <span>GMP Compliant</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>{'\u25A0'}</div>
              <div className={styles.visualLines}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.vLine} style={{ '--delay': `${i * 0.18}s` }} />
                ))}
              </div>
              <div className={styles.visualLabel}>Molecular bond strength</div>
              <div className={styles.visualBars}>
                {[90, 75, 95, 60, 85].map((v, i) => (
                  <div key={i} className={styles.barWrap}>
                    <div className={styles.bar} style={{ '--h': `${v}%`, '--delay': `${i * 0.14}s` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.value} className={styles.stat}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h4 className={styles.eyebrow}>Industries We Serve</h4>
            <h2 className={styles.sectionTitle}>Adhesive solutions across every sector</h2>
            <p className={styles.sectionDesc}>
              From sterile pharma environments to heavy-duty industrial assembly, our formulations are engineered for
              consistent performance.
            </p>
          </div>
          <div className={styles.industryGrid}>
            {industries.map((ind) => (
              <div key={ind.name} className={styles.industryCard}>
                <div className={styles.industryIcon}>{ind.icon}</div>
                <h3 className={styles.industryName}>{ind.name}</h3>
                <p className={styles.industryDesc}>{ind.desc}</p>
                <Link to="/products" className={styles.learnMore}>
                  View Products
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresInner}>
            <div className={styles.featuresLeft}>
              <h4 className={styles.eyebrow}>Why Choose Bizfam</h4>
              <h2 className={styles.sectionTitle}>The standard for industrial adhesives in Pakistan</h2>
              <p className={styles.bodyCopy}>
                With 18 years of formulation expertise, Bizfam Pakistan delivers adhesive products that exceed quality
                expectations while staying tuned to local industrial conditions.
              </p>
              <Link to="/about" className={styles.btnPrimary}>
                Learn More About Us
              </Link>
            </div>
            <div className={styles.featuresRight}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureTick}>{'\u2713'}</div>
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

      <section className={styles.pharmaSection}>
        <div className="container">
          <div className={styles.pharmaCard}>
            <div className={styles.pharmaBadge}>Pharma Sector Leader</div>
            <h2 className={styles.pharmaTitle}>Trusted by Pakistan's top pharmaceutical companies</h2>
            <p className={styles.pharmaDesc}>
              Our pharmaceutical-grade adhesives are used for blister packaging, label adhesion, carton sealing, and
              tablet coating. Every batch is formulated under GMP conditions with full traceability.
            </p>
            <div className={styles.pharmaFeats}>
              {['USP/EP Compliant', 'Batch Traceability', 'Low Migration Formula', 'Clean Room Compatible'].map((f) => (
                <span key={f} className={styles.pharmaFeat}>
                  {f}
                </span>
              ))}
            </div>
            <Link to="/contact" className={styles.btnAccent}>
              Talk to Our Pharma Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
