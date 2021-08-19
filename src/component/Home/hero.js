
import '../../App.css'
import React from 'react';
import Image from '../../images/hero-img.png'

export default class hero extends React.Component{
  state ={
    currentImage: 0,
      images: [
        "http://hello.wabloan.com/-260nw-1746333059.jpg",
        "http://hello.wabloan.com/7.jpg",
        "http://hello.wabloan.com/hero-img.png",
        "http://hello.wabloan.com/why-us.png",
        
        
      ]

  }
  
  switchImage = ()=> {
    
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    
  }

  componentDidMount(){
    console.log(this.state.currentImage)
    setInterval(this.switchImage, 5000);
  }

  render(){
    
    return (
      <div className="heroSection">
        
            <div className="row justify-content-center">
              <div className="col-md-3"> 
                  <h1>TRADE YOUR BITCOIN, ETHEREUM AND GIFT CARDS WITH US</h1>
                  <button className="btn btn-md btn-outline-primary mt-4">Sign Up Today</button>
              </div>

              <div className="col-md-6"> 
                <img src={this.state.images[this.state.currentImage]} className="hero_img"/>
              </div>
          </div>

      </div>
    );
  }
  
}