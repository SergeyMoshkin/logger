import React, { PropTypes } from 'react';
import style from './Logger.css';
import $ from 'jquery'

export default class Logger extends React.Component{

  static propTypes = {
    children: PropTypes.node
  };

  async componentDidMount() {
    let url = "/logs-2016-07-29/_search";
    let request = {"from":0,"size":500,"sort":{"_score":{"order":"asc"}},"explain":true};
    request.fields = ["severity", "@timestamp", "host", "message", "stacktrace","logger","description"];
    try {
      let data = await $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data: JSON.stringify(request)
      });
      this.props.onLog(data);
    }
    catch(e) {
      console.error(`Error ${e.status}: ${e.responseText}`);
    }
  }

  render(){
    return (
      <div className={style.main}>
        { this.props.children }
      </div>
    )
  }

};