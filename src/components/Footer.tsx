import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {site.name}. Made of caffeine, kerning, and one (1) personality.</p>
        <p>Black, white, and a little bit of mischief.</p>
      </div>
    </footer>
  )
}
