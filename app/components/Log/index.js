import React, { PropTypes } from 'react';
import style from './Log.css';

const Log = (props) => {
  return (
    <div className={style.log} onClick={props.onLogClick} onMouseEnter={(ev) => props.onShowTooltip(ev, props.fields)} onMouseLeave={props.onCloseTooltip}>
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
  color: PropTypes.string,
  onShowTooltip: PropTypes.func.isRequired,
  onLogClick: PropTypes.func.isRequired,
  onCloseTooltip: PropTypes.func.isRequired,
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