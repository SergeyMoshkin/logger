import React, { PropTypes } from 'react';
import style from './Filter.css';

const Filter = (props) => {
  return (
    <div className={style.filter}>
      <div className={style.input}>
        <input type="text" placeholder="input"/>
      </div>
      <div className={style.input}>
        <input type="text" placeholder="input"/>
      </div>
      <div className={style.input}>
        <input type="text" placeholder="input"/>
      </div>
    </div>
  )
};


export default Filter
