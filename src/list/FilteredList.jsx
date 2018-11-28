import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*
 * Handles filtering logic for items. Supports brand and color filtering,
 *   and price sorting. 
*/
class FilteredList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      brand: "All",
      color: "All",
      sorted: ""
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
    return (this.state.brand === "All" || this.state.brand === item.brand);
}

handleColorFilter = (item) => {
    return (this.state.color === "All" || this.state.color === item.color);
}

filterItem = (item) => {
  return this.handleBrandFilter(item) && this.handleColorFilter(item);
}

sortItems = (items) => {
    if (this.state.sorted === "") {
        return items;
    } 
    items.sort((a, b) => a.price - b.price);
    if (this.state.sorted === "des") {
        items.reverse();
    }
    return items;
}

reset = () => {
    this.setState({ brand: "All", color: "All", sorted: "" }) 
}

render() {
  return (
    <div className="filter-list">
      <DropdownButton id="brandDropdown" title={this.state.brand} noCaret>
        <MenuItem eventKey="All" onSelect={() => this.dropDownSelect('All', 'brand')}>All</MenuItem>
        <MenuItem eventKey="Nike" onSelect={() => this.dropDownSelect('Nike', 'brand')}>Nike</MenuItem>
        <MenuItem eventKey="Adidas" onSelect={() => this.dropDownSelect('Adidas', 'brand')}>Adidas</MenuItem>
        <MenuItem eventKey="Puma" onSelect={() => this.dropDownSelect('Puma', 'brand')}>Puma</MenuItem>
      </DropdownButton>

      <DropdownButton id="colorDropdown" title={this.state.color} noCaret>
        <MenuItem eventKey="All" onSelect={() => this.dropDownSelect('All', 'color')}>All</MenuItem>
        <MenuItem eventKey="White" onSelect={() => this.dropDownSelect('White', 'color')}>White</MenuItem>
        <MenuItem eventKey="Black" onSelect={() => this.dropDownSelect('Black', 'color')}>Black</MenuItem>
        <MenuItem eventKey="Red" onSelect={() => this.dropDownSelect('Red', 'color')}>Red</MenuItem>
      </DropdownButton>

        {/*
          First filter, then sort the remaining items. 
        */} 
        <List items={this.sortItems(this.props.items.filter(this.filterItem))} />
      </div>
    );
  }
}
export default FilteredList;
