import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout';
import './assets/styles/application.scss';
const rootContainer = document.getElementById('rootContainer');
console.log(document.getElementById('rootContainer'));
const App = () => <Layout />;

ReactDOM.render(<App />, rootContainer);
