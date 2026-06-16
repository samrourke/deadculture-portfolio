import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.grainOverlay} />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.contactText}>
            <div className={styles.titleContainer}>
              <h1 className={styles.titleText}>Get In Touch</h1>
            </div>
            {/* <h1 className={styles.subTitle} style={{ fontWeight: 600 }}>
              Let's work together.
            </h1> */}
            <p className={styles.body}>
              I'm always looking for new interesting project to work on. If you
              have an idea or just want to say hi then email{" "}
              <a
                style={{ fontWeight: 700, color: "var(--contrast-color)" }}
                href="mailto:info@deadculture.co.uk"
                className={styles.emailLink}
              >
                {" "}
                info@deadculture.co.uk
              </a>
              .
            </p>
            <p className={styles.body}>
              Or complete in this form and tell me about how I can help.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.formCard}>
            <form
              name="booking"
              data-netlify="true"
              className={styles.form}
              //   netlify-honeypot="bot-field"
              //   onSubmit={handleSubmit}
            >
              {/*Hidden Input for Netlify - do not use self closing tags */}
              <input type="hidden" name="form-name" value="booking"></input>
              {/*Hidden Input for Netlify to handle redirect instead of action="/thank-you" inside <form /> */}
              <input type="hidden" name="_next" value="/thank-you"></input>
              {/* Honeypot anti-spam field */}
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a bit about your idea..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <p className={styles.submitText}>Send</p>
              </button>

              {/* <div className={styles.logoDiv}>
            <img src="/icon.png" className={styles.logo} alt="Logo" />
          </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
