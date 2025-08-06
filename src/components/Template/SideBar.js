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
        I am a Georgia Tech masters student and an alumnus at Hewlett Packard Enterprise.
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
