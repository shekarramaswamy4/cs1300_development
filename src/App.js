import React, { Component } from 'react';
import './App.css';
import { data } from './data/data';
import FilteredList from './list/FilteredList';
import { PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      // add page header and then navbar 
      <div className="App">
      <PageHeader>
        SneakerCon
        <p></p>
        <small>the world's coolest new shoes!</small>
      </PageHeader>
      <FilteredList items={data}/>
      </div>
    );
  }
}

export default App;
