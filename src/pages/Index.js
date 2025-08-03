/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';

import LandingMain from '../layouts/LandingMain';
import Typewriter from '../components/Typewriter';
import Blurb from '../components/Blurb';

const Index = () => {
  if (window.innerWidth < 1281) {
    return (
      <LandingMain
        description={
        "Riya Roshan's personal website. Atlanta based Georgia Tech graduate student."
      }
        typingDone
      >
        <section id="landing">
          <div className="center">
            <h2>Hi there.      I&apos;m Riya Roshan</h2>
            <Blurb />
          </div>
        </section>
      </LandingMain>);
  }

  const [typingDone, setTypingDone] = useState(false);
  const [visible, setVisible] = useState('invisible');

  return (
    <LandingMain
      description="Riya Roshan's personal website"
      typingDone={typingDone}
    >
      <section id="landing">
        <div className="center">
          <Typewriter text="Hi there.      I&apos;m Riya Roshan." delay={75} onTypingDone={() => { setTypingDone(true); setVisible('fadeIn'); }} />
          <div className={visible}>
            <Blurb />
          </div>
        </div>
      </section>
    </LandingMain>);
};

export default Index;
