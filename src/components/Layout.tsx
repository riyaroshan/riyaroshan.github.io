import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const move = () => document.getElementById(id)?.scrollIntoView()
      requestAnimationFrame(move)
      window.setTimeout(move, 50)
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <div className="shell">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Nav />
      <ScrollManager />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
