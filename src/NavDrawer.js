import React from 'react';
import './NavDrawer.css';

import NavLinks from './NavLinks';

import { ReactComponent as MenuIcon } from './res/menu.svg';
import { ReactComponent as HomeIcon } from './res/home.svg';
import { ReactComponent as TalksIcon } from './res/account.svg';
import { ReactComponent as BlogIcon } from './res/pen.svg';
import { ReactComponent as ProjectsIcon } from './res/code-tags.svg';

function NavDrawer() {
  return (
    <div className="NavDrawer">
      <NavLinks/>
      <ul>
        <li className="NavButton">
          <MenuIcon className="icon"/>
          <span className="label">MENU</span>
        </li>
        <li className="NavButton">
          <HomeIcon className="icon"/>
          <span className="label">HOME</span>
        </li>
        <li className="NavButton">
          <TalksIcon className="icon"/>
          <span className="label">TALKS</span>
        </li>
        <li className="NavButton">
          <BlogIcon className="icon"/>
          <span className="label">BLOG</span>
        </li>
        <li className="NavButton">
          <ProjectsIcon className="icon"/>
          <span className="label">PROJECTS</span>
        </li>
      </ul>
    </div>
  );
}

export default NavDrawer;
