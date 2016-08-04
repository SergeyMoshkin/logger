import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LoggerList from '../../components/LoggerList';
import Logger from '../../components/Logger';
import Popup from '../../components/Popup';
import style from './styles.css';

const body = document.querySelector('body');

export default class HomePage extends React.Component {

  state = {
    logsList: [],
    popupShown: false
  };

  pushLogsList = (data) => {

    this.setState({
      logsList: this.state.logsList.concat(data.hits.hits)
    });
  };

  setBodyOverflow = (value) => {
    body.style.overflow = value;
  };

  showPopup = () => {
    this.setState((state) => {
      state.popupShown = true;
    }, () => {
      this.setBodyOverflow("hidden");
    }
    )
  };

  closePopup = () => {
    this.setState((state) => {
      state.popupShown = false;
    }, () => {
      this.setBodyOverflow("auto");
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.showPopup} style={{color: '#fff'}}>click</div>
        {this.state.popupShown && <Popup onClosePopup={this.closePopup} log={this.state.logsList[0]}/>}
        <Logger onLog={this.pushLogsList}>
          {
            this.state.logsList.length > 0
            &&
            <LoggerList logs={this.state.logsList}>
            </LoggerList>
          }
        </Logger>
      </div>
    );
  }
}
