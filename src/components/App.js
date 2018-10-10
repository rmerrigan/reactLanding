import React, { Component } from 'react';
import Header from './header/Header';
import MainContent from './maincontent/MainContent';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
