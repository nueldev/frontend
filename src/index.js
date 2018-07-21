import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/**
 *Browser Router is a Higher order component / HOC, it needs to wrap 
 the entire APP.
 it also seems that your forgot to add --save after installing the router, because i had
 to manually add it to the project. 
 */

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();