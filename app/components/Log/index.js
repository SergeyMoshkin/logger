import React, { PropTypes } from 'react';
import style from './Log.css';
import Tooltip from '../Tooltip';

const Log = (props) => {
  
    return (
      <div className={style.log} onClick={props.onLogClick}>
        {
          props.fields.map((item, i) => {
            if(i === 0){
              return (
                <span key={item + i} className={style.logHost} style={{color: props.color}} onMouseEnter={(ev) => props.onLogEnter(ev)}
                      onMouseLeave={props.onLogLeave}>
                  { props.log[item] }
                </span>
              )
            }
            else {
              return (
                <span key={item + i} className={style.logItem}
                      style={(i === 0) ? {color: props.color} : {color: props.colors[props.log.severity[0]]}}>
                { (i === 1 && props.log['stacktrace']) ? <span style={{fontSize: '14px'}}>&#x26A1; </span> : null }
                    {props.log[item][0] || props.log["stacktrace"]}
              </span>
              )
            }

          })
        }
      </div>
    )
};

Log.propTypes = {
  log: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  color: PropTypes.string,
  onLogClick: PropTypes.func.isRequired,
  onLogEnter: PropTypes.func.isRequired,
  onLogLeave: PropTypes.func.isRequired,
};

Log.defaultProps = {
  fields: ['host', 'message'],
  colors: {
    INFO: '#fff',
    WARN: '#f0ad4e',
    ERROR: '#c9302c',
    TRACE: '#b5b5b5'
  }
};

export default Log