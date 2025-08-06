import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/home" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Riya Roshan</h2>
        <p>
          <a href="mailto:riyaroshan1212@gmail.com">riyaroshan1212@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am a Georgia Tech graduate student, and
        a IT Developer at Hewlett Packard Enterprise almnus.
        I have industry experience in backend and cloud engineering but I love tinkering and building,
        so I&apos;ve accrued various experiences from fullstack engineering to applied machine learning through various
        projects and ventures!
      </p>
      <ul className="actions">
        <li>
          <a href={`${process.env.PUBLIC_URL}/riya-roshan.pdf`} target="_blank" rel="noreferrer" className="button"> View Resume </a>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Riya Roshan.
      </p>
    </section>
  </section>
);

export default SideBar;
