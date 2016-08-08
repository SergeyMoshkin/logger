import React, { PropTypes } from 'react';
import style from './Log.css';
import Tooltip from '../Tooltip';

export default class Log extends React.Component {

  render() {
    return (
      <div className={style.log} onClick={this.props.onLogClick} onMouseEnter={(ev) => this.props.onLogEnter(ev)}
           onMouseLeave={this.props.onLogLeave}>
        {
          this.props.fields.map((item, i) => {
            return (
              <span key={item + i} className={style.logItem}
                    style={(i === 0) ? {color: this.props.color} : {color: this.props.colors[this.props.log.severity[0]]}}>
                { (i === 1 && this.props.log['stacktrace']) ? <span style={{fontSize: '14px'}}>&#x26A1; </span> : null }
                {
                  (item === 'message') ?
                    (this.props.log[item][0] || 'no message') :
                    this.props.log[item]
                }
              </span>
            )
          })
        }
      </div>
    )
  }
};

Log.propTypes = {
  log: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  color: PropTypes.string,
  onLogClick: PropTypes.func.isRequired,
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