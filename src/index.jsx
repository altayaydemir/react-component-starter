import React from 'react';
import style from './style.scss';

class Test extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className={style.Wrapper}>
        Testing!
      </div>
    );
  }
}

export default Test;
