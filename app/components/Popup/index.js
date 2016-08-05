import React, { PropTypes } from 'react';
import style from './Popup.css';

const Popup = (props) => {

  return (
    <div className={style.popup}>
      <div className={style.popupContent}>
        <div className={ style.popupCross } onClick={props.onClosePopup}>&#x2573;</div>
        {
          props.fields.map((item) => <div key={ item } className={style.field} >
            <h2 className={style.fieldTitle}>{item}</h2>
            { props.content[item] }
          </div>)
        }
      </div>
    </div>
  )

};

Popup.propTypes = {
  content: PropTypes.object.isRequired,
  onClosePopup: PropTypes.func.isRequired
};

Popup.defaultProps = {
  fields: ['host', 'message', '@timestamp', 'stacktrace', 'logger', 'description', 'severity']
};

export default Popup
