import React from 'react';
import {Card, Button} from 'react-bootstrap';



class Beast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: 0,
    };
  }

addVoteImageClick = () => {

    this.setState({
      vote:this.state.vote + 1,
      lastUpdated: new Date(),
      
    });

    console.log(this.state);
  };

  
  render(){
    console.log('state', this.state);
  return(
  <div>
    
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={this.props.image_url} />
   <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>{this.props.description}</Card.Text>

    <p><Button onClick={this.addImageClick}>Vote</Button></p>
  </Card.Body>
  </Card>
  </div>
)
}
}
    


export default Beast;