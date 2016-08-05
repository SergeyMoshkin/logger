import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LoggerList from '../../components/LoggerList';
import Logger from '../../components/Logger';
import Popup from '../../components/Popup';
import Filter from '../../components/Filter';
import Tooltip from '../../components/Tooltip';
import style from './styles.css';

const body = document.querySelector('body');

export default class HomePage extends React.Component {

  state = {
    logsList: [],
    popupShown: false,
    tooltipShown: [false, 0],
    currentLog: 0
  };

  pushLogsList = (data) => {

    this.setState({
      logsList: this.state.logsList.concat(data.hits.hits)
    });
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

  showTooltip = (ev, data) => {
    this.setState({
      tooltipShown: [true, ev.target.offsetTop + 25]
    })
  };

  closeTooltip = () => {
    this.setState({
      tooltipShown: [false, 0]
    })
  };

  render() {
    return (
      <div>
        {this.state.popupShown && <Popup onClosePopup={this.closePopup} content={this.state.logsList[this.state.currentLog].fields}/>}
        {this.state.tooltipShown[0] && <Tooltip content={this.state.logsList[this.state.currentLog].fields} top={this.state.tooltipShown[1]}/>}
        <Filter />
        <Logger onLog={this.pushLogsList}>
          {
            this.state.logsList.length > 0
            &&
            <LoggerList logs={this.state.logsList} onLogClick={(data) => {this.setCurrentLog(data); this.showPopup()}} onShowTooltip={(ev, data, i) => {this.setCurrentLog(i); this.showTooltip(ev, data)}} onCloseTooltip={this.closeTooltip}>
            </LoggerList>
          }
        </Logger>
      </div>
    );
  }
}
