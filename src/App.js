import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    items: [],
    isLoaded: false,
    }
}

componentDidMount() {
    fetch('https://openexchangerates.org/api/latest.json?app_id=88c34cf0e69d4b57913a69b36c10a66c')
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

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return ( 
        <div classname="App">
            <h4>Latest</h4>
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
}
 
export default App;
