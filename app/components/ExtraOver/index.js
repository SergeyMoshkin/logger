import React, { PropTypes } from 'react';
import style from './ExtraOver.css';
import Popup from '../Popup';
import Tooltip from '../Tooltip';

const body = document.querySelector('body');

export default class ExtraOver extends React.Component {

  static propTypes = {
    content: PropTypes.array
  };

  state = {
    popupShown: false,
    currentLog: 0,
    tooltipShown: [false, 0, 0]
  };

  setBodyOverflow = (value) => {
    body.style.overflow = value;
  };

  showPopup() {
    this.setState((state) => {
        state.popupShown = true;
      }, () => {
        this.setBodyOverflow("hidden");
      }
    )
  };

  setCurrentLog(number) {
    this.setState({
      currentLog: number
    });
  }

  closePopup = () => {
    this.setState((state) => {
      state.popupShown = false;
    }, () => {
      this.setBodyOverflow("auto");
    });
  };

  showTooltip = (ev) => {
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
      <div>
        {this.state.popupShown && <Popup onClosePopup={this.closePopup} content={this.props.content[this.state.currentLog].fields}/>}
        {this.state.tooltipShown[0] && <Tooltip content={this.props.content[this.state.currentLog].fields} coords={[this.state.tooltipShown[1], this.state.tooltipShown[2]]}/>}
      </div>
    )
  }

};

