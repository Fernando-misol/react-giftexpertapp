import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';

import './index.css';

const divRoor=document.querySelector('#app');

ReactDOM.render(<GifExpertApp/>,divRoor);// reactDom.render(<CounterApp value={123} /> , divRoor);