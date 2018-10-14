import React, { Component } from 'react';
import Header from './Component/Jobs/header.js';
import JobList from './Component/Jobs/jobList.js';
import JobsFooter from './Component/Jobs/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <JobList></JobList>
        <JobsFooter></JobsFooter>
      </div>
    );
  }
}

export default App;
