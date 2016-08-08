import React, { PropTypes } from 'react';
import style from './Log.css';
import Tooltip from '../Tooltip';

export default class Log extends React.Component {

  state = {
    tooltipShown: [false, 0, 0]
  };

  showTooltip = (ev, data) => {
    this.setState({
      tooltipShown: [true, ev.clientY + window.scrollY + 15, ev.clientX + window.scrollX + 10]
    })
  };

  closeTooltip = () => {
    this.setState({
      tooltipShown: [false, 0, 0]
    })
  };

  render() {
    return (
      <div className={style.log} onClick={this.props.onLogClick} onMouseEnter={(ev) => this.showTooltip(ev, this.props.fields)}
           onMouseLeave={this.closeTooltip}>
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
        {this.state.tooltipShown[0] &&
        <Tooltip content={this.props.log} coords={[this.state.tooltipShown[1], this.state.tooltipShown[2]]}/>}
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