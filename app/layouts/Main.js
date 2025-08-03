import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ReactGA from 'react-ga';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_ID);
}

class Main extends Component {
  UNSAFE_componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: window.location.pathname,
      });
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <>
        <Helmet titleTemplate="%s | Kevin Mao" defaultTitle="Kevin Mao" />
        {this.props.fullPage
          ? (<> {this.props.children} </>)
          : (
            <div id="wrapper">
              <Header />
              <div id="main">
                {this.props.children}
              </div>
              <Nav photography={this.props.photography} />
            </div>
          )}
      </>);
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;
