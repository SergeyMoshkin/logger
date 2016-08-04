import React, { PropTypes } from 'react';
import style from './LoggerList.css';
import Log from '../Log';

var crc32 = (function()
{
  var table = new Uint32Array(256);
  for(var i = 256; i--;)
  {
    var tmp = i;
    for(var k = 8; k--;)
    {
      tmp = tmp & 1 ? 3988292384 ^ tmp >>> 1 : tmp >>> 1;
    }

    table[i] = tmp;
  }
  return function( data )
  {
    var crc = -1;

    for(var i = 0, l = data.length; i < l; i++)
    {
      crc = crc >>> 8 ^ table[ crc & 255 ^ data[i] ];
    }

    return (crc ^ -1) >>> 0;
  };

})();

const LoggerList = (props) => {

    return (
      <div className={style.main}>
        {
          props.logs.map((item, i) => {
            let fields = Object.assign(item.fields, {id: [item._id], index: [item._index], type: [item._type], score: [item._score]});
            let color = props.colorArray[crc32(fields.host[0]) % props.colorArray.length];
            return <Log key={i} log={fields} color={color}/>
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
  colorArray: PropTypes.array
};

export default LoggerList

