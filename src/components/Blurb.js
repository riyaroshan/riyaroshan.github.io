import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';

const Blurb = () => (
  <>
    <section id="blurb">
      <div className="container">
        <div className="row" style={{ maxWidth: '50em' }}>
          <div className="col-md-8 center">
            <Link to="/home" className="logo">
              <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
          </div>

          <div className="col-md-4" style={{ padding: '1em' }}>
            <header>
              <p>
                <a href="mailto:riyaroshan1212@gmail.com">riyaroshan1212@gmail.com</a>
              </p>
            </header>
            <section className="blurb">
              <p style={{ marginBottom: '1em' }}>
                I&apos;m a Georgia Tech M.S. in Computer Science student
                {' '}
                and a former software engineer at
                {' '}
                Hewlett Packard Enterprise, where I worked
                {' '}
                on enterprise backend systems, microservices,
                {' '}
                and deployment infrastructure.
                {' '}
                My experience spans backend engineering, distributed systems,
                {' '}
                and enterprise software, and I&apos;m particularly interested in building scalable
                {' '}
                infrastructure and AI-driven systems.
                {' '}
                Outside of work, I enjoy travelling and photographing what I see.
              </p>

              <ul className="actions">
                <li>
                  <Link to="/projects" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </section>

            <section id="footer">
              <ul className="icons">
                {data.map((s) => (
                  <li key={s.label}>
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={s.icon} size="lg" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Blurb;
