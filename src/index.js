import React from 'react';
import ReactDOM from 'react-dom';
import { /*HomeScene,*/ StaffScene } from './scenes';
import './static/css/styles.css';
import data from './data.json';

ReactDOM.render(<StaffScene data={data}/>, document.getElementById('root'));
