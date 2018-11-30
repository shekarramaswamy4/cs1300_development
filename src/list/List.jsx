import React, { Component } from 'react';
import Card from '../card/Card';
import '../App.css';
import { Grid, Row, Alert } from 'react-bootstrap';

/*
 * This list component renders the items that are passed to it via props.
 * Each item is rendered with a ListCard.
*/
class List extends Component { 



  renderList() {

    const data = this.props.items;

    var rowSize = 3; // can change this to determine number of elements per row
    var splitted = [];

    data.forEach((item)=>{
      if(!splitted.length || splitted[splitted.length-1].length === rowSize)
      splitted.push([]);

      splitted[splitted.length-1].push(item);
    });

    const grid = splitted.map(item => {
      return(
      <Row key={Math.random()}>
        {item.map(card => {
          return(
            <Card key={card.name} data={card}/>
          )
        })}
      </Row>)
    });
    return grid;
  }
  
  render() {
    if (this.props.items.length === 0) {
      return (
        <Alert bsStyle="danger">
          <strong>Sorry!</strong> We don't have any shoes that fit your search.
        </Alert>
      );
    }
    return (
      <div>
        <Grid>
          {this.renderList()}
        </Grid>
      </div>
    );
  }
}
export default List;
