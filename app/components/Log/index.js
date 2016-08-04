import React, { PropTypes } from 'react';
import style from './Log.css';

const Log = (props) => {
  return (
    <div className={style.log} onClick={props.onLogClick}>
      {
        props.fields.map((item, i) => {
          return (
            <span key={item + i} className={style.logItem}
                  style={(i === 0) ? {color: props.color} : {color: props.colors[props.log.severity[0]]}}>
              {(i === 1 && props.log['stacktrace']) ? <span style={{fontSize: '14px'}}>&#x26A1; </span> : null}
              {
                (item === 'message') ?
                (props.log[item][0] || 'no message') :
                props.log[item]
              }
            </span>
          )
        })
      }
    </div>
  )
};

Log.propTypes = {
  log: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  color: PropTypes.string
};

Log.defaultProps = {
  fields: ['host', 'message'],
  colors: {
    INFO: '#fff',
    WARN: '#f0ad4e',
    ERROR: '#c9302c'
  }
};

export default Log