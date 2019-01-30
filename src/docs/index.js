import React from 'react';
import ReactDOM from 'react-dom';
import { RequestBody } from '../lib/RequestBody';

const App = () => (
  <div>
    <h1>Graph UI</h1>
    <RequestBody/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
