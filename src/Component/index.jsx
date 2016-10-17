import React from 'react';
import style from './style.scss';

class Component extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className={style.Wrapper}>
        Componenting!
      </div>
    );
  }
}

export default Component;
