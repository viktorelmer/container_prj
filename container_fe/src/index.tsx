import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; 
import { VERSION_LOG_STYLE } from './exports/constants.main';
import { getProjectVersionText } from './exports/utils';

import './style.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(getProjectVersionText(), VERSION_LOG_STYLE);