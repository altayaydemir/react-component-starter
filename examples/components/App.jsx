import React, { Component } from 'react';

import Test from '../../dist';
import '../../dist/style.css';

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <h1>React Component Starter</h1>
        <Test />
      </div>
    );
  }
}

export default App;
