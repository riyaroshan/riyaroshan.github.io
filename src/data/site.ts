export const site = {
  name: 'Riya Roshan',
  short: 'RR',
  role: 'Product designer',
  email: 'hello@riyaroshan.com',
  location: 'Somewhere with good light',
  availability: 'Open to work',
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Now', href: '/#now' },
  { label: 'Contact', href: '/#contact' },
]

export type Project = {
  slug: string
  number: string
  title: string
  tag: string
  year: string
  blurb: string
  cover: 'form' | 'fold' | 'hall'
  role: string
  timeline: string
  problem: string
  approach: string[]
  outcome: string
  joke: string
}

export const projects: Project[] = [
  {
    slug: 'form',
    number: '01',
    title: 'Form',
    tag: 'Fitness',
    year: '2026',
    blurb: 'A gym app that treats rest days as part of the plan, not a moral failing.',
    cover: 'form',
    role: 'Product design',
    timeline: 'Independent, 2026',
    problem:
      'Most fitness apps are either a drill sergeant or a ghost town after day four. They shout, they badge, they guilt. Nobody opens an app to be disappointed by a cartoon fire.',
    approach: [
      'Design around showing up, not around punishment.',
      'Three screens you actually use. Everything else can wait in the hallway.',
      'Rest is scheduled, named, and slightly celebrated. Quietly.',
    ],
    outcome:
      'A calmer workout companion with big type, few decisions, and no badge for drinking water. I can no longer pretend I don’t know what a split squat is. This is the cost of research.',
    joke: 'Built for people whose New Year’s resolution is currently in airplane mode.',
  },
  {
    slug: 'fold',
    number: '02',
    title: 'Fold',
    tag: 'Notes',
    year: '2025',
    blurb: 'A notes app that files itself, so your brain doesn’t have to become a junk drawer.',
    cover: 'fold',
    role: 'Product design',
    timeline: 'Independent, 2025',
    problem:
      'Notes apps start as a second brain and end as a landfill. Search becomes archaeology. The important thing is always the one you named “asdf”.',
    approach: [
      'One notebook at a time. Weekly archive, not infinite scroll.',
      'If you haven’t opened it in thirty days, it files itself. No funeral.',
      'Typography first. If it looks like a tax form, people will treat it like one.',
    ],
    outcome:
      'Fewer notes. Better notes. The delete key finally got the promotion it deserved.',
    joke: 'It does less on purpose. That is the whole product strategy.',
  },
  {
    slug: 'hall',
    number: '03',
    title: 'Hall',
    tag: 'Events',
    year: '2025',
    blurb: 'Check-in for events that does not require a volunteer, a clipboard, and a small crisis.',
    cover: 'hall',
    role: 'Product design',
    timeline: 'Independent, 2025',
    problem:
      'The guest list lives in a spreadsheet. The door lives in reality. Between them: a person with a laptop at 20% and a smile at 4%.',
    approach: [
      'Three taps. Name, confirm, you’re in. No account required to enter a room.',
      'The host sees who arrived. The guest sees a door, not a product tour.',
      'Name it like a place, not like enterprise software having a feeling.',
    ],
    outcome:
      'Guests get in. Hosts get to host. The clipboard can retire to a quieter life, perhaps as a cutting board.',
    joke: 'If it needs an onboarding carousel, it is not a door.',
  },
]

export const principles = [
  {
    n: '01',
    title: 'If it needs a tooltip, it needed a redesign.',
    body: 'I would rather spend a week on the label than a year on the help center.',
  },
  {
    n: '02',
    title: 'White space is not empty.',
    body: 'It is the part of the page that lets a person breathe. Also the part that makes clients ask if we can “fill it up a bit.” We cannot.',
  },
  {
    n: '03',
    title: 'Ship the honest version.',
    body: 'Then make it quieter. Most first drafts are trying too hard, including this sentence in an earlier draft.',
  },
]

export const now = [
  { label: 'Designing', value: 'Things that do not require a tutorial' },
  { label: 'Avoiding', value: 'Meetings named “quick sync”' },
  { label: 'Collecting', value: 'Typefaces I will use “one day”' },
  { label: 'Available', value: 'For work. Not for group chats named “random”' },
]
