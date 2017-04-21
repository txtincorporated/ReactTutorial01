import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

let app = <Counter />;

ReactDOM.render(
  <div>{app}</div>,
  document.getElementById('app-root')

);
