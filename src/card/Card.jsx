import React, { Component } from 'react';
import './Card.css';
import { Thumbnail, Button } from 'react-bootstrap';

/*
 * A component for a single entry in the list of items.
*/
class Card extends Component {

  render() {
    const item = this.props.data;

    // need to find a better way to conditionally render div 
    if (item.name === "hidden") {
      return (
        <div className="card-wrapper-hide">
          <Thumbnail src={item.img} className="image" />
        </div>
      );
    }

    return (
      <div className="card-wrapper">
        <Thumbnail src={item.img} className="image">
          <h3>{item.name}</h3>
            <p>{item.color} • ${item.price}</p>
            <p></p>
            <p>
            <Button bsStyle="primary">Add to Cart</Button>
          </p>
        </Thumbnail>
      </div>
    );
  }
}

export default Card;