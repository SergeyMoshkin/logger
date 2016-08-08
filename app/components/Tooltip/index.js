import React, { PropTypes } from 'react';
import style from './Tooltip.css';

const Tooltip = (props) => {

  return (
    <div className={style.main} style={{top: props.coords[0], left: props.coords[1]}}>
      {
        props.fields.map((item) => <div key={ item } className={style.field} >
          <h5 className={style.fieldTitle}>{item}</h5>
          { props.content[item] }
        </div>)
      }
    </div>
  )

};

Tooltip.propTypes = {
  content: PropTypes.object.isRequired,
  coords: PropTypes.array.isRequired,
};

Tooltip.defaultProps = {
  fields: ['host', '@timestamp', 'logger', 'description', 'severity']
};

export default Tooltip
