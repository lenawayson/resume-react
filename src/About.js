import React, { Component } from 'react';
import './App.css';

class About extends Component {

    render(){
        return (
            <div class="content">
            <div class="about">
            <h2>Hi, I'm Lena.</h2>
            <div style={{width: "95%", display:"block", fontWeight:"normal"}}> <br />
            I'm a senior at the <b>University of Georgia</b> studying <b>Computer Science.</b>  {'   '}
            I've always loved solving problems, optimizing solutions, and thinking outside of the box. I also like making things look nice.
            I'm experienced in <b>software engineering</b> and <b>web design + development</b>.  I would like to learn more about <b>artificial intelligence</b>.
            <br />
            <br />
            In my free time, I enjoy concerts, camping, and <b>entrepreneurship</b>.  
            <br />
            <br />
            Let's build something together. 
            </div>
            </div>
            </div>
        )
    }
}
export default About;