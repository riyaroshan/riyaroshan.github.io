import React, { useState } from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';

import Main from '../layouts/Main';
import Header from '../components/Template/Header';
import Blurb from './Blurb';

const Index = () => {
  const cursorProps = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  };
  const [introduce, setIntroduce] = useState(false);

  return (
    <Main fullPage>
      { window.innerWidth > 760
        ? <React.Fragment>
          {introduce
        && <Header /> }
          <section id="landing">
            <div className="center col-sm center-block">
              <Typist
                cursor={cursorProps}
                onTypingDone={() => {
                  setIntroduce(() => true);
                }}
              >
                <h2 id="typist">Hi there. <Typist.Delay ms={500} /> I&apos;m Kevin Mao. </h2>
              </Typist>

              <Fade when={introduce} duration={1500}>
                <Blurb hideTitle />
              </Fade>

            </div>
          </section>
          </React.Fragment>
        : <React.Fragment>
          <Header />
          <section id="landing">
            <div className="center col-sm center-block">
              <Blurb />
            </div>
          </section>
        </React.Fragment>
      }
    </Main>
  );
};

export default Index;
