import React, { Component } from 'react';
import './App.css';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes = [],
      selectedQuoteIndex: null
    }
  }
  
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
      .then(data => data.json())
      .then(d => console.log(d))
  }
  
  nextQuoteClickHandler() {
    console.log('Hi');
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

export default App;
