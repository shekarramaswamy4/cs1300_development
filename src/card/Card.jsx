import React, { Component } from 'react';
import './Card.css';
import { Thumbnail, Button } from 'react-bootstrap';

/*
 * A component for a single entry in the list of items.
*/
class Card extends Component {

  render() {
    const item = this.props.data;

    return (
      <div className="card-wrapper">
        <Thumbnail src={item.img} className="image">
          <h3>{item.name} ({item.color})</h3>
            <p>${item.price}</p>
            <p>
            <Button bsStyle="primary">Add to Cart</Button>
          </p>
        </Thumbnail>
      </div>
    );
  }
}

export default Card;