import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './app/store'
import { HashRouter } from 'react-router-dom';
import {AnimationDurationProvider} from './providers/animationDurationProvider'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimationDurationProvider>
    <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
    </Provider>
  </AnimationDurationProvider>
);
