import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cover } from '../components/Cover'
import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { now, principles, projects, site } from '../data/site'

const ticker = [
  'Less noise, more signal',
  'Available for 2026',
  'Whitespace is a feature',
  'Mostly black and white',
  'A little bit of humor',
  'No splash screens',
]

export function Home() {
  const [toast, setToast] = useState('')
  const [clicks, setClicks] = useState(0)

  function onMonogram() {
    const next = clicks + 1
    setClicks(next)
    if (next === 5) {
      setToast('Achievement unlocked: unemployed intern of clicking. There is no prize. The prize was the clicking.')
      window.setTimeout(() => setToast(''), 4200)
      setClicks(0)
    }
  }

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <p className="kicker">{site.location}</p>
            <p className="pill">
              <span className="dot" aria-hidden="true" />
              {site.availability}. Closed to “quick calls.”
            </p>
          </div>

          <Reveal>
            <h1>
              I make products
              <br />
              that don’t need
              <br />
              <em>a user manual.</em>
            </h1>
          </Reveal>

          <div className="hero-copy">
            <Reveal delay={80}>
              <p>
                {site.name} is a {site.role.toLowerCase()} who believes clutter is a design decision —
                just a bad one. Quiet interfaces. Loud problems. Occasional jokes, never clip art.
              </p>
              <p className="fine">Yes, this is the portfolio. No hidden splash screen. I checked twice.</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="hero-actions">
                <a className="btn" href="#work">
                  See the work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Say hello
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Selected work</h2>
            </Reveal>
            <p className="kicker">Independent studies</p>
          </div>

          <ul className="work-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link className="work-item" to={`/work/${project.slug}`}>
                  <span className="num">{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                  <span className="meta">{project.tag}</span>
                  <span className="meta year">{project.year}</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="covers">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link className="cover-link" to={`/work/${project.slug}`}>
                  <div className="cover-frame">
                    <Cover variant={project.cover} title={project.title} />
                  </div>
                  <div className="cover-cap">
                    <span>{project.title}</span>
                    <span>{project.tag}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="hair wrap" />

      <section className="section" id="about">
        <div className="wrap about-grid">
          <Reveal>
            <button className="monogram" type="button" onClick={onMonogram} aria-label="Decorative monogram. Click if you must.">
              R
            </button>
          </Reveal>
          <Reveal delay={90}>
            <div className="about-copy">
              <p className="kicker">About</p>
              <h2>Less decoration. More decision.</h2>
              <p>
                I design products that try to get out of the way. Research, structure, type, and the
                discipline to delete the clever thing that was only clever to me.
              </p>
              <p>
                Before this sentence existed, there was a longer one with the word “passionate” in it.
                You are welcome.
              </p>
              <p>
                If you need someone who can make a complex flow feel inevitable — and keep a straight
                face while doing it — we should talk. If you need more gradients, there are other
                websites.
              </p>
              <ul className="tools">
                <li>Figma</li>
                <li>Research</li>
                <li>A little code</li>
                <li>Too many tabs</li>
                <li>The delete key</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>How I work</h2>
            <p className="kicker">Three rules, still standing</p>
          </div>
          <ul className="principles">
            {principles.map((item, i) => (
              <Reveal key={item.n} delay={i * 70}>
                <li>
                  <p className="n">{item.n}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <hr className="hair wrap" />

      <section className="section" id="now">
        <div className="wrap">
          <div className="section-head">
            <h2>Now</h2>
            <p className="kicker">Subject to mood</p>
          </div>
          <ul className="now-list">
            {now.map((item) => (
              <li key={item.label}>
                <span className="now-label">{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <Reveal>
            <h2>
              Let’s make something that doesn’t need a <em>walkthrough.</em>
            </h2>
          </Reveal>
          <div className="contact-grid">
            <Reveal delay={60}>
              <p>
                Projects, roles, or a compliment about the kerning. All accepted. Group chats named
                “random” are not.
              </p>
              <a className="mail link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {toast ? (
        <div className="toast show" role="status">
          {toast}
        </div>
      ) : null}
    </>
  )
}
