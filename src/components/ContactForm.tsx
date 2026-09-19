import { useState, type FormEvent } from 'react'
import { site } from '../data/site'

export function ContactForm() {
  const [status, setStatus] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus('I need all three. This is not a mysterious art piece. It is a form.')
      return
    }

    const subject = encodeURIComponent(`Hello from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email app. If nothing happens, copy the address. Technology is a group project.')
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" placeholder="The one you answer to" />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="I will not start a newsletter. I promise." />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" placeholder="Pitch, compliment, or conspiracy. Keep it under a novel." />
      </label>
      <button className="btn btn-light" type="submit">
        Send it
      </button>
      {status ? <p className="form-note">{status}</p> : <p className="form-note">This opens your mail app. No servers were harmed.</p>}
    </form>
  )
}
