import React, { Component } from 'react';

/*
 * This list component renders the items that are passed to it via props.
 * Each item is rendered with a ListCard.
*/
class List extends Component { 

  renderList() {
    const items = this.props.items.map(item => {
      return <li key={item.name}>{item.name}</li>
    });
    return items;
  }
  
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}
export default List;
