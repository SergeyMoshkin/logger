import React, { PropTypes } from 'react';
import style from './Popup.css';

export default class Popup extends React.Component {

  static propTypes = {
    log: PropTypes.object,
    onClosePopup: PropTypes.func.isRequired
  };

  static defaultProps = {
    fields: ['host', 'message', '@timestamp', 'stacktrace', 'logger', 'description']
  };

  stopProp = (ev) => {
    ev.stopPropagation();
  };

  render() {
    let logContent = this.props.log.fields;
    return (
      <div className={style.popup} onClick={this.props.onClosePopup}>
        <div className={style.popupContent} onClick={this.stopProp}>
          { this.props.fields.map((item) => <div key={ item } className={style.field} >
            <h2 className={style.fieldTitle}>{item}</h2>
            { logContent[item] }
          </div>) }
        </div>
      </div>
    )
  }
}
