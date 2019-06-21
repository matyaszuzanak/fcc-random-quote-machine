import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }
  
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, () => {
        this.setState({ selectedQuoteIndex: this.selectQuoteIndex() })
      }));
  }
  
  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);  
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
