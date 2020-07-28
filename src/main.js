import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './component/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/application.scss';
const rootContainer = document.getElementById('rootContainer');

const App = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);
ReactDOM.render(<App />, rootContainer);
