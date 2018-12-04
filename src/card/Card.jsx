import React, { Component } from 'react';
import './Card.css';
import { Thumbnail } from 'react-bootstrap';

/*
 * A component for a single entry in the list of items.
*/
class Card extends Component {

  render() {
    const item = this.props.data;

    let link = "https://www.google.com/search?q=" + item.name
    // return statement hides the card if its name field is hidden (for spacing)
    return (
      <div className="card-wrapper">
        <Thumbnail src={item.img} className="image"
          style={item.name === "hidden" ? { visibility: "hidden" } : {}}>
          <a href={link} target="_blank">
          < h3>{item.name}</h3>
          </a>
            <br /> <br />
            <h5>{item.color} • ${item.price}</h5>
            <p></p>
            <p>
          </p>
        </Thumbnail>
      </div>
    );
  }
}

export default Card;