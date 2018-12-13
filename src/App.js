import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SimpleAppBar from './components/SimpleAppBar';
import SimpleCard from './components/SimpleCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SimpleAppBar />
        <h2 className="Page-title">IPFS Weekly Calls Helper</h2>
        <SimpleCard />
        </header>
        <h3 className="ScheduledCalls-title">Previously Scheduled Calls</h3>
      </div>
    );
  }
}

export default App;
