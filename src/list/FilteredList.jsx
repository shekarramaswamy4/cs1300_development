import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem} from 'react-bootstrap';

/*
 * Handles filtering logic for items. Supports brand and color filtering,
 *   and price sorting. 
*/
class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      color: "",
      sorted: "des"
    };
}

// handleDropDown = (newType) => {
//   this.setState({type: newType})
// }

handleBrandFilter = (item) => {
    return (this.state.brand === "" || this.state.brand === item.brand);
}

handleColorFilter = (item) => {
    return (this.state.color === "" || this.state.color === item.color);
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
    this.setState({ brand: "", color: "", sorted: "" })
}

render() {
  return (
    <div className="filter-list">
      {/* <h1>Produce Search</h1>
      <DropdownButton id="typeDropdown" title={this.state.type}>
        <MenuItem eventKey="All" onSelect={() => this.handleDropDown('All')}>All</MenuItem>
        <MenuItem eventKey="Fruit" onSelect={() => this.handleDropDown('Fruit')}>Fruits</MenuItem>
        <MenuItem eventKey="Vegetables" onSelect={() => this.handleDropDown('Vegetable')}>Vegetables</MenuItem>
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
