import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Pastdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
    items: [],
    isLoaded: false,
    date: '2020-10-20',
    }
}

mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.date);
    this.fetchExchangeRates();
}

myChangeHandler = (event) => {
    this.setState({date: event.target.value});
}

fetchExchangeRates = () => {
      fetch('https://openexchangerates.org/api/historical/' + this.state.date + '.json?app_id=88c34cf0e69d4b57913a69b36c10a66c')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.rates,
        })
      })
}

  render() { 

    var { isLoaded, items } = this.state;
    return ( 
                <div classname="App">
                    <form onSubmit={this.mySubmitHandler}>
                    <h4>Past, please input date (YYYY-MM-DD):</h4>
                    <h4>Date = {this.state.date}</h4>
                    <input type='text' onChange={this.myChangeHandler}/>
                    <input type='submit'/>
                    </form>
                      <ul>
                        {Object.keys(items).map(item => (
                          <li>
                            To {item} : { items[item] }
                          </li>
                        ))};
                      </ul>
                </div>
               );
        }
    }
 
export default Pastdate;
