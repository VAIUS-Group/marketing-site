import React, { Component } from 'react';
import Header from './Component/Jobs/header.js';
import JobList from './Component/Jobs/jobList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <JobList></JobList>
      </div>
    );
  }
}

export default App;
