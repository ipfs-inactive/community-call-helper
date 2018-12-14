import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SimpleAppBar from './components/SimpleAppBar';
import SimpleCard from './components/SimpleCard';

class App extends Component {
  onSubmit = fields => {
    console.log("App comp got: ", fields)
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SimpleAppBar />
        <h2 className="Page-title">IPFS Weekly Calls Helper</h2>
        <SimpleCard onSubmit={fields => this.onSubmit(fields)}/>
        </header>
        <h3 className="ScheduledCalls-title">Previously Scheduled Calls</h3>
        
      </div>
    );
  }
}

export default App;
