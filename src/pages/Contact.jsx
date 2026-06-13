import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.bg} />
        <div className="container">
          <h4 className={styles.eyebrow}>Get in Touch</h4>
          <h1 className={styles.title}>
            Contact <span className={styles.accent}>Bizfam</span>
          </h1>
          <p className={styles.subtitle}>
            Request a quote, ask for a technical data sheet, or talk to our engineers about a custom formulation.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formCol}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              {sent ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>{'\u2713'}</div>
                  <h3>Message Received!</h3>
                  <p>Our team will contact you within 1-2 business days. For urgent inquiries, please call us directly.</p>
                  <button className={styles.resetBtn} onClick={() => setSent(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={submit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Muhammad Ali" required />
                    </div>
                    <div className={styles.field}>
                      <label>Company *</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Your Company Ltd." required />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handle} placeholder="you@company.com" required />
                    </div>
                    <div className={styles.field}>
                      <label>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+92-XXX-XXXXXXX" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Product of Interest</label>
                    <select name="product" value={form.product} onChange={handle}>
                      <option value="">Select a product category...</option>
                      <option>Pharmaceutical Adhesives</option>
                      <option>Packaging Adhesives</option>
                      <option>Industrial Adhesives</option>
                      <option>Specialty Adhesives</option>
                      <option>Custom Formulation</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={6}
                      placeholder="Describe your application, required volume, specifications, or any questions..."
                      required
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3>Office and Factory</h3>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>{'\u{1F4CD}'}</span>
                  <div>
                    <strong>Bizfam Pakistan (Pvt.) Ltd.</strong>
                    <p>
                      Industrial Zone, S.I.T.E. Area
                      <br />
                      Karachi, Sindh, Pakistan
                    </p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>{'\u260E'}</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+92-21-XXXX-XXXX</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>{'\u2709'}</span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      info@bizfampakistan.com
                      <br />
                      sales@bizfampakistan.com
                    </p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>{'\u23F0'}</span>
                  <div>
                    <strong>Business Hours</strong>
                    <p>
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM PKT
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.quickCard}>
                <h4>Quick Response</h4>
                <p>
                  For urgent orders or technical support, our team typically responds within 2-4 hours during business
                  hours.
                </p>
                <div className={styles.quickBadges}>
                  <span>{'\u26A1'} Same-Day Quotes</span>
                  <span>{'\u269B'} Free Samples</span>
                  <span>{'\u{1F4CB}'} TDS Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
