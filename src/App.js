
import './App.css';
import React from 'react';
import Home from './component/Home'
import Header from './component/Layout/header'
import image1 from './images/cartoon/concept11@2x.png'
import image2 from './images/cartoon/concept23@2x.png'
import image3 from './images/cartoon/concept26.png'
export default class App extends React.Component{
  state = {
    images:[
        {
          url:{image1}
        },
        {
          url:{image2}
        },
        {
          url:{image3}
        },
    ]
  }
  render(){
    return (
      <div className="mycontainer">
         <Header/>
         <Home imageUrl={this.state.images}/>
      </div>
    );
  }
  
}


