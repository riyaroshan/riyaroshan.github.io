import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function renderLinks() {
    return nav.map((item) => (
      <li key={item.href}>
        <Link
          to={{ pathname: '/', hash: item.href.replace('/#', '') }}
          className="link"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
      </li>
    ))
  }

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="logo" aria-label={`${site.name}, home`}>
            {site.name}
            <small>{site.role}</small>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <ul className="nav-links">{renderLinks()}</ul>

          <a className="nav-cta link" href={`mailto:${site.email}`}>
            Hire me <em>(please)</em>
          </a>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-panel${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        <ul>{renderLinks()}</ul>
        <a className="link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </>
  )
}
