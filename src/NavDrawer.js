import React from 'react';
import { connect } from 'react-redux';
import './NavDrawer.css';

import NavLinks from './NavLinks';

import { ReactComponent as MenuIcon } from './res/menu.svg';
import { ReactComponent as HomeIcon } from './res/home.svg';
import { ReactComponent as TalksIcon } from './res/account.svg';
import { ReactComponent as BlogIcon } from './res/pen.svg';
import { ReactComponent as ProjectsIcon } from './res/code-tags.svg';

function NavDrawer({ state, dispatch }) {
  return (
    <div className="NavDrawer">
      <NavLinks/>
      <ul>
        <li className="NavButton">
          <MenuIcon className="icon"/>
          <span className="label">MENU</span>
        </li>
        <li className="NavButton" onClick={() => dispatch({ type: "HOME" })}>
          <HomeIcon className="icon"/>
          <span className="label">HOME</span>
        </li>
        <li className="NavButton" onClick={() => dispatch({ type: "TALKS" })}>
          <TalksIcon className="icon"/>
          <span className="label">TALKS</span>
        </li>
        <li className="NavButton" onClick={() => dispatch({ type: "BLOG" })}>
          <BlogIcon className="icon"/>
          <span className="label">BLOG</span>
        </li>
        <li className="NavButton" onClick={() => dispatch({ type: "PROJECTS" })}>
          <ProjectsIcon className="icon"/>
          <span className="label">PROJECTS</span>
        </li>
      </ul>
    </div>
  );
}

export default connect()(NavDrawer);
