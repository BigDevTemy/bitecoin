
import React from 'react';
import Hero from './hero'

export default class index extends React.Component{
  render(){
    return (
      <div>
        <Hero imageUrl={this.props.imageUrl}/>
      </div>
    );
  }
  
}