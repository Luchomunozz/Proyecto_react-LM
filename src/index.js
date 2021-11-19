import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Components/UI/Logo/Logo';
import Navigate from './Components/UI/Nav_banner/Nav_banner';
import Back from './Components/Pages/Home/Home'

ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <Navigate />
    <Back />
  </React.StrictMode>,
  document.getElementById('root')
);


