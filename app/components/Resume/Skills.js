import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';

const handleProps = ({ categories, skills }) => ({
  buttons: categories.map(cat => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  skills: skills.map(skill => Object.assign(skill, {
    category: skill.category.sort(),
  })),
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, skills: props.skills });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState(handleProps({ categories: nextProps.categories, skills: nextProps.skills }));
  }

  getRows() {
    // search for true active categorys
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    const skillList = this.state.skills.sort((a, b) => {
      let ret = 0;
      if (a.compentency > b.compentency) ret = -1;
      else if (a.compentency < b.compentency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter(skill => (actCat === 'All' || skill.category.includes(actCat)));

    return skillList.map((skill, idx) => (
      <>
        <li className="course-container">
          {skill.strong ? <p className="course-name" key={skill.title}><strong>{skill.title}</strong></p>
            : <p className="course-name" key={skill.title}>{skill.title}</p>}

        </li>
        { idx !== skillList.length - 1
          && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
      </>));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map(key => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some(key => buttons[key]);
      return { buttons };
    });
  }

  render() {
    return (
      <div className="courses">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <ul className="course-list">
          <p>Things I&apos;ve used before and <strong> things I&apos;ve used a lot. </strong> </p>

          {this.getRows()}
        </ul>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    compentency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};


export default Skills;
