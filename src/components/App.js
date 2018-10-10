import React, { Component } from 'react';
import Header from './header/Header';
import MainContent from './maincontent/MainContent';
import Footer from './footer/Footer';
import style from '../styles/appWideStyle.css';

class App extends Component {
  render() {
    return (
      <div className={style.appContainer}>
        <MainContent />
      </div>
    );
  }
}

export default App;
