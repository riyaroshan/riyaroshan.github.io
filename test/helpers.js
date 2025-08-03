const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Riya Roshan',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/home',
    title: 'Riya Roshan',
    heading: 'HOME',
  },
  {
    route: '/resume',
    title: 'Resume | Riya Roshan'
  },
  {
    route: '/projects',
    title: 'Projects | Riya Roshan',
    heading: 'PROJECTS',
  },
  {
    route: '/photography',
    title: 'Photography | Riya Roshan',
    heading: 'PHOTOGRAPHY',
  },
];

export { pages, randomString };
