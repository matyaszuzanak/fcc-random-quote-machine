import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import QuoteMachine from './components/QuoteMachine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }
  
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }
  
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
  
  /**
   * Returns an integer representing an index in array of quotes (state.quotes) 
   */
   generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);  
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
      </div>
    );
  }
}

export default App;
