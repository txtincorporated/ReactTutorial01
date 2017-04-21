import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import FilteredList from './List';

let app = <Counter />;

// Toggle on to see filtered list app instead of counter
app = <FilteredList />;

ReactDOM.render(
  <div>{app}</div>,
  document.getElementById('app-root')

);
