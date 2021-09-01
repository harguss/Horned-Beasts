import React from 'react';
import {Card, Button} from 'react-bootstrap';


class Hornedbeast extends React.Component {
  render(){
  return(
  <div>
    {/* <h2>{this.props.title}</h2>

    <img title={this.props.title} 
         src={this.props.src}
         alt={this.props.title} 
    />

  mport React from 'react';
import {Card, Button} from 'react-bootstrap';


class Hornedbeast extends React.Component {
  render(){
  return(
  <div>
    {/* <h2>{this.props.title}</h2>

    <img title={this.props.title} 
         src={this.props.src}
         alt={this.props.title} 
    />

    <p>{this.props.description}</p> */}







  
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.src} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>{this.props.description}</Card.Text>

    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>
)
}
}
    


export default Hornedbeast;