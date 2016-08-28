import React, { Component } from 'react';

class Test extends Component {
  componentWillMount() {
    console.log('TEST!');
  }

  render() {
    return (
      <div>
        Test!
      </div>
    );
  }
}

export default Test;
