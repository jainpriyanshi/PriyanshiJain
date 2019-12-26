import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Background from './images/main.jpeg';
import './style.css';
var sectionStyle = {
   position : 'absolute',
   width: "100%",
   height: "100%",
  backgroundImage: `url(${ Background }`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'white'
};
export default class Landing extends Component {
    render() {
        
        return (
            <div  style= {sectionStyle} >
                <h1 class="hello "> Priyanshi Jain </h1>  
                <p class = "text"> I am Student at Computer Science Department at IIT Jodhpur . I am a Sophomore . A Sport Programmer and a full stack Web Developer </p>         
                <div class= "center">
                <Link class= "link" to='/contact'>Contact</Link>
                <Link class= "link" to='/about'>AboutMe</Link>
                <a class= "link"  href= {require('./B18CSE042.pdf')}>
                Resume
                </a>
                </div>
               
            </div>
        )
    }
}

