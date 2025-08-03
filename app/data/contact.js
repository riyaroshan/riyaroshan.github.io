import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';


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
