import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LoggerList from '../../components/LoggerList';
import Logger from '../../components/Logger';
import ExtraOver from '../../components/ExtraOver';
import Filter from '../../components/Filter';
import style from './styles.css';

const body = document.querySelector('body');

export default class HomePage extends React.Component {

  state = {
    logsList: []
  };

  pushLogsList = (data) => {
    this.setState({
      logsList: this.state.logsList.concat(data.hits.hits)
    });
  };

  logClick(number) {
    this.refs.extraOver.setCurrentLog(number);
    this.refs.extraOver.showPopup();
  };

  logEnter(ev, number) {
    this.refs.extraOver.setCurrentLog(number);
    this.refs.extraOver.showTooltip(ev);
  };

  logLeave = () => {
    this.refs.extraOver.closeTooltip();
  };

  render() {
    return (
      <div>
        <ExtraOver ref="extraOver" content={this.state.logsList}/>
        <Filter />
        <Logger onLog={this.pushLogsList}>
          {
            this.state.logsList.length > 0
            &&
            <LoggerList logs={this.state.logsList} onLogClick={(data) => {this.logClick(data)}} onLogEnter={(ev, data) => this.logEnter(ev, data)} onLogLeave={this.logLeave}>
            </LoggerList>
          }
        </Logger>
      </div>
    );
  }
}
