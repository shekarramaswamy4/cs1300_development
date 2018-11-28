import React, { Component } from 'react';
import Card from '../card/Card';
import '../App.css';
import { Grid, Row, Col } from 'react-bootstrap';

/*
 * This list component renders the items that are passed to it via props.
 * Each item is rendered with a ListCard.
*/
class List extends Component { 



  renderList() {

    const data = this.props.items;

    var rowSize = 3;
    var splitted = [];

    data.forEach((item)=>{
      if(!splitted.length || splitted[splitted.length-1].length === rowSize)
      splitted.push([]);

      splitted[splitted.length-1].push(item);
    });

    const grid = splitted.map(item => {
      return(
      <Row>
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
