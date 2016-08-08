import React, { PropTypes } from 'react';
import style from './LoggerList.css';
import Log from '../Log';
import crc32 from '../../utils/crc32'

const LoggerList = (props) => {

    return (
      <div className={style.main}>
        {
          props.logs.map((item, i) => {
            let fields = item.fields;
            let color = props.colorArray[crc32(fields.host[0]) % props.colorArray.length];
            return <Log key={i} log={fields} color={color} onLogClick={() => {props.onLogClick(i)}} onLogEnter={(ev) => props.onLogEnter(ev, i)} onLogLeave={props.onLogLeave}/>
          })
        }
      </div>
    );
};

LoggerList.defaultProps = {
  colorArray: ['#800000', '#008000', '#808000', '#800080', '#008080', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff']
};

LoggerList.propTypes = {
  logs: PropTypes.array,
  colorArray: PropTypes.array,
  onLogEnter: PropTypes.func,
  onLogLeave: PropTypes.func,
  onLogClick: PropTypes.func
};

export default LoggerList

