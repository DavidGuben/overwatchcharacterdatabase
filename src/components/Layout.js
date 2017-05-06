import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/../../static/img/overwatch-logo-img.png" alt="Overwatch Logo" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
    </footer>
  </div>
);

export default Layout;
