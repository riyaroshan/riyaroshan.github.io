import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="lost">
      <div>
        <p className="kicker">404</p>
        <h1>This page is on a rest day.</h1>
        <p>
          It does not exist, it is not coming back, and it would like you to stop refreshing. Home is
          still there, being very normal about it.
        </p>
        <Link className="btn" to="/">
          Go home
        </Link>
      </div>
    </section>
  )
}
