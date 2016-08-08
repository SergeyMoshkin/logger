import React, { PropTypes } from 'react';
import style from './Filter.css';
import img from './search.png'

export default class Filter extends React.Component {

  state = {
    filterShown: false
  };

  toggleFilter = () => {
    this.setState({
      filterShown: !this.state.filterShown
    })
  };

  render() {
    return (
      <div className={style.filter}>
        <img className={style.filterSearch} src={img} alt="" title="" onClick={this.toggleFilter}/>
        {
          this.state.filterShown
          &&
          <div className={style.filterFields}>
            <div className={style.input}>
              <input type="text" placeholder="input"/>
            </div>
            <div className={style.input}>
              <input type="text" placeholder="input"/>
            </div>
            <div className={style.input}>
              <select>
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        }
      </div>
    )
  }

};
