import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/application.scss';
const rootContainer = document.getElementById('rootContainer');

const App = () => <Layout />;

ReactDOM.render(<App />, rootContainer);
