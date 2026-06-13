import { Link } from 'react-router-dom'
import styles from './About.module.css'

const timeline = [
  { year: '2005', title: 'Founded in Karachi', desc: 'Bizfam Pakistan established in Karachi\'s industrial zone with a focus on industrial adhesive manufacturing.' },
  { year: '2009', title: 'Pharma Sector Entry', desc: 'Developed first GMP-certified formulation for pharmaceutical packaging, entering the pharma sector.' },
  { year: '2014', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification, formalizing our commitment to quality management systems.' },
  { year: '2018', title: 'Nationwide Expansion', desc: 'Expanded distribution network to cover all major industrial cities across Pakistan.' },
  { year: '2023', title: 'Market Leadership', desc: 'Established as Pakistan\'s leading industrial adhesive manufacturer with 200+ active clients.' },
]

const values = [
  { icon: '🔬', title: 'Precision Engineering', desc: 'Every formulation is developed in our in-house R&D lab with rigorous quality testing protocols.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We work alongside our clients to understand their exact needs and engineer solutions that fit.' },
  { icon: '🌍', title: 'Local Expertise', desc: 'Formulated specifically for Pakistan\'s industrial environment, climate conditions, and regulatory landscape.' },
  { icon: '♻️', title: 'Sustainable Practice', desc: 'Committed to developing low-VOC and solvent-free alternatives wherever possible.' },
]

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.bg}></div>
        <div className="container">
          <h4 className={styles.eyebrow}>About Bizfam Pakistan</h4>
          <h1 className={styles.title}>18 Years of Industrial<br /><span className={styles.accent}>Adhesive Excellence</span></h1>
          <p className={styles.subtitle}>Founded in Karachi in 2005, Bizfam Pakistan has grown to become the country's most trusted industrial adhesive manufacturer — serving pharmaceutical, packaging, and industrial sectors nationwide.</p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <h4 className={styles.eyebrow}>Our Story</h4>
              <h2>Built on a Foundation of Quality and Trust</h2>
              <p>Bizfam Pakistan was founded with a single goal: to engineer industrial adhesives that meet global standards while being optimized for Pakistani manufacturing conditions. Our founders saw a gap — Pakistani industries were relying on expensive imported adhesives that weren't always suited to local temperature extremes, humidity, or substrate types.</p>
              <p>Today, we serve over 200 companies, with our pharmaceutical-grade adhesives being the preferred choice for Pakistan's leading pharma manufacturers. Our products are used in blister packing, tablet coating, carton sealing, and industrial assembly across the country.</p>
              <Link to="/contact" className={styles.btn}>Contact Our Team</Link>
            </div>
            <div className={styles.storyRight}>
              <div className={styles.metricGrid}>
                {[
                  { v: '200+', l: 'Active Clients' }, { v: '50+', l: 'Formulations' },
                  { v: '18', l: 'Years Experience' }, { v: '100%', l: 'Pakistan Made' },
                ].map(m => (
                  <div key={m.l} className={styles.metric}>
                    <div className={styles.metricVal}>{m.v}</div>
                    <div className={styles.metricLabel}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h4 className={styles.eyebrow}>Our Values</h4>
            <h2>What Drives Us</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h4 className={styles.eyebrow}>Our Journey</h4>
            <h2>Milestones</h2>
          </div>
          <div className={styles.timelineList}>
            {timeline.map((t, i) => (
              <div key={t.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineYear}>{t.year}</div>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
