import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Cover } from '../components/Cover'
import { Reveal } from '../components/Reveal'
import { NotFound } from './NotFound'
import { projects, site } from '../data/site'

export function Project() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    if (!project) return
    document.title = `${project.title} — ${site.name}`
    return () => {
      document.title = `${site.name} — Designer`
    }
  }, [project])

  if (!project) {
    return <NotFound />
  }

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <article className="project-hero">
        <div className="wrap">
          <p className="crumb">
            <Link to="/#work">Work</Link>
            {' / '}
            {project.title}
          </p>
          <Reveal>
            <h1>{project.title}</h1>
          </Reveal>
          <p style={{ marginTop: '1rem', maxWidth: '42ch', color: 'var(--mute)' }}>{project.blurb}</p>
          <div className="project-meta">
            <div>
              <strong>Role</strong>
              {project.role}
            </div>
            <div>
              <strong>Type</strong>
              {project.tag}
            </div>
            <div>
              <strong>When</strong>
              {project.timeline}
            </div>
          </div>
        </div>
        <div className="project-cover">
          <Cover variant={project.cover} />
        </div>
      </article>

      <div className="wrap project-body">
        <Reveal>
          <p className="aside-joke">{project.joke}</p>
        </Reveal>
        <div>
          <section>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>The approach</h2>
            <ol>
              {project.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2>What happened</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>

      <div className="wrap">
        <div className="next-project">
          <span>Next</span>
          <Link to={`/work/${next.slug}`}>
            {next.number} — {next.title}
          </Link>
        </div>
      </div>
    </>
  )
}
