import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//We import app component, then we display it to the DOM with a getelementbyid
//call passing in the app component to render, basically the start of the
//component tree

ReactDOM.render(<App />, document.getElementById('app'));
