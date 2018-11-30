import React, { Component } from 'react';
import './Card.css';
import { Thumbnail, Button } from 'react-bootstrap';

/*
 * A component for a single entry in the list of items.
*/
class Card extends Component {

  render() {
    const item = this.props.data;

    // return statement hides the card if its name field is hidden (for spacing)
    return (
      <div className="card-wrapper">
        <Thumbnail src={item.img} className="image" 
          style={item.name === "hidden" ? { visibility: "hidden" } : {}}>
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