import React from 'react';


class Hornedbeast extends React.Component {
  render(){
  return(
  <div>
    <h2>{this.props.title}</h2>

    <img title={this.props.title} 
         src={this.props.src}
         alt={this.props.title} 
    />

    <p>{this.props.description}</p>
  </div>
)
}
}
    


export default Hornedbeast;