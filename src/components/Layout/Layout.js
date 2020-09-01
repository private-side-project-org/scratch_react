import React from 'react';
import Navbar from 'components/Navbar';

const Layout = ({ component }) => (
  <div className="layout-container">
    <Navbar />
    {component}
  </div>
);

export default Layout;
