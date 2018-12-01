import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import '../App.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*
 * Handles filtering logic for items. Supports brand and color filtering,
 *   and price sorting. 
*/
class FilteredList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      brand: "All Brands",
      color: "All Colors",
      sorted: "No sort"
    };
}

dropDownSelect = (newFilter, field) => {
  if (field === 'brand') {
    this.setState({ brand: newFilter })
  } else if (field === 'color') {
    this.setState({ color: newFilter })
  } else if (field === 'sorted') {
    this.setState({ sorted: newFilter })
  }
}

handleBrandFilter = (item) => {
    return (this.state.brand === "All Brands" || this.state.brand === item.brand);
}

handleColorFilter = (item) => {
    return (this.state.color === "All Colors" || this.state.color === item.color);
}

filterItem = (item) => {
  return this.handleBrandFilter(item) && this.handleColorFilter(item);
}

sortItems = (items) => {
    if (this.state.sorted === "No sort") {
        return items;
    } 
    items.sort((a, b) => a.price - b.price);
    if (this.state.sorted === "Price: $$-$") {
        items.reverse();
    }
    return items;
}

reset = () => {
    this.setState({ brand: "All Brands", color: "All Colors", sorted: "No sort" })
}


/**
 * Shuffles array in place, using Fisher Yates algorithm
 * @param {Array} a items An array containing the items.
 * PLEASE NOTE THAT THIS SHUFFLE WAS TAKEN FROM STACK OVER FLOW!
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array 
 */
shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

render() {
  const isDefault = this.state.brand === "All Brands" 
    && this.state.color === "All Colors" 
    && this.state.sorted === "No sort";
  return (
    <div className="filter-list">
      <div className="filters">
      <div>
      <h3>Filters:</h3>
      <DropdownButton id="brandDropdown" title={this.state.brand} noCaret>
        <MenuItem eventKey="All Brands" onSelect={() => this.dropDownSelect('All Brands', 'brand')}>All</MenuItem>
        <MenuItem eventKey="Nike" onSelect={() => this.dropDownSelect('Nike', 'brand')}>Nike</MenuItem>
        <MenuItem eventKey="Adidas" onSelect={() => this.dropDownSelect('Adidas', 'brand')}>Adidas</MenuItem>
        <MenuItem eventKey="Puma" onSelect={() => this.dropDownSelect('Puma', 'brand')}>Puma</MenuItem>
      </DropdownButton>

      <DropdownButton id="colorDropdown" title={this.state.color} noCaret>
        <MenuItem eventKey="All Colors" onSelect={() => this.dropDownSelect('All Colors', 'color')}>All</MenuItem>
        <MenuItem eventKey="White" onSelect={() => this.dropDownSelect('White', 'color')}>White</MenuItem>
        <MenuItem eventKey="Black" onSelect={() => this.dropDownSelect('Black', 'color')}>Black</MenuItem>
        <MenuItem eventKey="Red" onSelect={() => this.dropDownSelect('Red', 'color')}>Red</MenuItem>
        <MenuItem eventKey="Green" onSelect={() => this.dropDownSelect('Green', 'color')}>Green</MenuItem>
      </DropdownButton>
      <DropdownButton id="sortBy" title={this.state.sorted} noCaret>
        <MenuItem eventKey="No sort" onSelect={() => this.dropDownSelect('No sort', 'sorted')}>No sort</MenuItem>
        <MenuItem eventKey="Price: $-$$" onSelect={() => this.dropDownSelect('Price: $-$$', 'sorted')}>Price: $-$$</MenuItem>
        <MenuItem eventKey="Price: $$-$" onSelect={() => this.dropDownSelect('Price: $$-$', 'sorted')}>Price: $$-$</MenuItem>
      </DropdownButton>
      </div>
      <div>
        {isDefault ? 
          <Button bsStyle="primary" disabled>Reset</Button> : 
          <Button bsStyle="primary"
            onClick={() => this.reset()}>Reset</Button>}
      </div>

      </div>

        {/*
          First filter, then sort the remaining items. 
        */} 
        { isDefault ? 
          <List items={this.shuffle(this.props.items)}/> : 
          <List items={this.sortItems(this.props.items.filter(this.filterItem))} /> }
      </div>
    );
  }
}
export default FilteredList;
