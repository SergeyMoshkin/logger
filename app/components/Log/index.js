import React, { PropTypes } from 'react';
import style from './Log.css';

const Log = (props) =>
  <div className={style.log} title={JSON.stringify(props.log)}>
    {
      props.fields.map((item, i) => {
        return (
          <span key={item + i} className={style.logItem} style={(i === 0) ? {color: `#${props.color}`} : {}}>
            {props.log[item]}
          </span>
        )
      })
    }
  </div>;

Log.propTypes = {
  log: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  color: PropTypes.string
};

Log.defaultProps = {
  fields: ['host', 'message', 'index', 'type', 'score', 'id', '@timestamp', 'stacktrace', 'logger', 'description']
};

export default Log