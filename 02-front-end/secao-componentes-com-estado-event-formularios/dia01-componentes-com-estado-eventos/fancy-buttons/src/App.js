import React from 'react';
import './App.css';

class App extends React.Component{
  constructor () {
    super()
    
    this.state = {
      numBtn1: 0,
      numBtn2: 0,
      numBtn3: 0,
    };
    
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
    
  }
  button1 () {
    this.setState((estadoAnterior, _prop) => ({
      numBtn1: estadoAnterior.numBtn1 + 1,
    }));
  }
  
  button2 () {
    this.setState((estadoAnterior, _prop) => ({
      numBtn2: estadoAnterior.numBtn2 + 1,
    }));
  }
  button3 () {
    this.setState((estadoAnterior, _prop) => ({
      numBtn3: estadoAnterior.numBtn3 + 1,
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.button1}>{this.state.numBtn1}</button>
        <button onClick={this.button2}>{this.state.numBtn2}</button>
        <button onClick={this.button3}>{this.state.numBtn3}</button>
      </>
    );
  }
}

export default App;
