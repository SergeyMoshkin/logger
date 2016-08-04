import React, { PropTypes } from 'react';
import style from './Logger.css';
import $ from 'jquery'

export default class Logger extends React.Component{

  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    let url = "/logs-2016-07-29/_search";
    let request = {"from":0,"size":1000,"sort":{"_score":{"order":"asc"}},"fields":["severity", "@timestamp", "host", "message", "stacktrace","logger","description"],"explain":true};
    $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data: JSON.stringify(request)
      })
      .fail(
        (res) => console.log(res)
      )
      .done(
        (res) => this.props.onLog(res)
      );
  }

  render(){
    return (
      <div className={style.main}>
        { this.props.children }
      </div>
    )
  }

};