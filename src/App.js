import React, { Component } from 'react';
import './App.css';
import data from './data';
import FilteredList from './list/FilteredList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={data}/>
      </div>
    );
  }
}

export default App;
