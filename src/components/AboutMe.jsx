import React, { Component } from 'react'
import Background from './images/about.jpg';
import './style.css';
var sectionStyle = {
   position : 'absolute',
   width: "100%",
   height: "100%",
  backgroundImage: `url(${ Background }`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
export default class AboutMe extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div class="card mx-auto col-lg-4 mt-5 bg-dark" >
                <img class="cardimg" src={require('./images/priyanshi.jpeg')} alt=".." />
                <div class="card-body text-center" style={{color: "white"}}>
                    <p> Priyanshi Jain</p>
                    <p >Sophomore</p>
                    <p >CSE UnderGraduate IIT Jodhpur</p>
                    <p >CGPA : 8.99 </p>
                    
                </div>
                </div>
            </div>
        )
    }
}
