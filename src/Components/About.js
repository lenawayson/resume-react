import React, { Component } from 'react';
import '../App.css';

class About extends Component {

    render(){
        return (
            <div class="content">
            <div class="about">
                <h2>Hi, I'm Lena.</h2>
                <div style={{width: "85%", display:"block", fontWeight:"normal"}}> <br />
                <div class="job">
                I'm a senior at the University of Georgia studying Computer Science. {'   '}
                I've always loved solving problems, optimizing solutions, and strategizing. I also like making things look nice.
                I'm experienced in software engineering and web development.  I would like to learn more about artificial intelligence.
                <br />
                <br />
                In my free time, I enjoy going to concerts, dancing, camping, cooking, and working out. As a result of my interest in entrepreneurship, I'm active in my local startup community.  
                <br />
                <br />
                While I am constantly working to become a better developer, I distinguish myself from my peers with my outgoing personality. I enjoy meeting new people and getting the chance to understand their values,
                and enjoy communicating with others.
                <br />
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default About;