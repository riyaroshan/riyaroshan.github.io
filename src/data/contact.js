import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFileText } from '@fortawesome/free-regular-svg-icons/faFileText';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const contactInfo = [
  {
    link: 'https://www.instagram.com/riyaroshan96/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'www.linkedin.com/in/riya-roshan-2464661b2',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:riyaroshan1212@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: `${process.env.PUBLIC_URL}/riya-roshan.pdf`,
    label: 'Resume',
    icon: faFileText,
  },
];

export default contactInfo;
