import React, { Component } from 'react';
import './App.css';

class App extends Component {
  createBubbles = () => {
    let bubbleList = [];
    for(let i = 0; i < 200; i++) {
      bubbleList.push(<div className="bubble"></div>);
    }
    return bubbleList;
  }
  render() {
    return (
      <div className="bottom-particles">
      {this.createBubbles()}
      </div>
    );
  }
}

export default App;
