import '../../App.css';
import React from 'react';
import logo from '../../images/logo.png'
export default class App extends React.Component{
  render(){
    return (
      <div>
       
          <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white">
            <a href="#" className="navbar-brand mb-0 h1" style={{marginLeft:'5%'}}>
              <img className="d-inline-block align-top" src={logo} width="50px"/>
              
            </a>
            <button 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navBarNav"
              aria-controls="navBarNav"
              aria-expanded="false"
              aria-label="Toggle Navigation"
              className="navbar-toggler m-2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navBarNav">
              <ul className="navbar-nav" style={{marginRight:'10%'}}>
                  <li className="nav-item active p-2">
                    <a href="#" className="nav-link active">About Us</a>
                  </li>
                  <li className="nav-item dropdown  p-2">
                    <a href="#" className="nav-link dropdown-toggle"
                     data-bs-toggle="dropdown" aria-expanded="false" id="navBarDropdownButton" role="button" >Contact Us</a>
                     <ul className="dropdown-menu" aria-labelledby="navBarDropdownButton">
                       <li><a href="#" className="dropdown-item">1</a></li>
                       <li><a href="#" className="dropdown-item">2</a></li>
                       <li><a href="#" className="dropdown-item">3</a></li>
                       <li><a href="#" className="dropdown-item">4</a></li>

                     </ul>
                  </li>
                  <li className="nav-item  p-2">
                    <a href="#" className="nav-link">Faqs</a>
                  </li>
                  <li className="nav-item  p-2">
                    <a href="#" className="nav-link">Login</a>
                  </li>
                  <li className="nav-item  p-2">
                    <a href="#" className="nav-link">Rates</a>
                  </li>
                  <li className="nav-item  p-2">
                    <a href="#" className="nav-link">Register</a>
                  </li>
              </ul>
            </div>
          
          </nav>

       </div>
      
    );
  }
  
}