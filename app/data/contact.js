import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faFilePdf from '@fortawesome/fontawesome-free-regular/faFilePdf';


const data = [
  {
    link: 'https://github.com/riyaroshan',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/riyaroshan96/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/im-kevin-mao',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto: riyaroshan1212@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: `${BASE_PATH}/riya-roshan.pdf`,
    label: 'Resume',
    icon: faFilePdf,
  },
];

export default data;
