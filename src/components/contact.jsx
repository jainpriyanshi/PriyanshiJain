import React, { Component } from 'react'
import Background from './images/contact.jpg';
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
export default class contact extends Component {
    render() {
        return (
            <div style= {sectionStyle}>
                <h1 class = "hello"> Contact Me ;)</h1>
                <p class = "mail"> jain.23@iitj.ac.in</p>
                <div class="logoalign">
                <a href= "https://github.com/jainpriyanshi" >
                <img class = "img1" src={require('./images/github.png')} alt = "github "/>
                </a>
                <a href ="https://www.facebook.com/priyanshi.jain.3158652" >
                <img class = "img2" src={require('./images/fb.png')} alt = "facebook"/>
                </a>
                <a href = "https://www.linkedin.com/in/priyanshi-jain-a3262a188/">
                <img class = "img3" src={require('./images/linkedin.png')} alt = "Linkedin"/>
                </a>
                </div>
            </div>
        )
    }
}
