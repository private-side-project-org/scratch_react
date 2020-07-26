import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

const Layout = ({ component }) => (
  <div className="layout-container">
    <Navbar />
    {component}
  </div>
);

export default Layout;
