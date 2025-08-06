/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

import LandingMain from '../layouts/LandingMain';
import Blurb from '../components/Blurb';

const Home = () => (
  <LandingMain
    description="Riya Roshan's personal website."
    fullPage
    typingDone
  >
    <section id="landing">
      <div className="center">
        <h2>Hi there. I&apos;m Riya Roshan.</h2>
        <Blurb />
      </div>
    </section>
  </LandingMain>);

export default Home;
