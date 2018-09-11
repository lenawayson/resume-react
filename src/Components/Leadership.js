import React, { Component } from 'react';
import '../App.css';

class Experience extends Component {
    render(){
        return(
            <div class="content">
            <div class="experience">
            <div class="center-view">
                <div class="job">
                        <h2>Seller Labs</h2>
                        <b><h3>Software Engineering Intern</h3></b>
                        <h4>May 2018-August 2018</h4>
                    <div class="job-text">
                    During the summer of 2018, I developed an internal tool for tracking customer subscription metrics using React and Node.js, as well as developed a weekly Java worker which interacted with the Stripe API, analyzed its response, and entered calculations into a mySQL databased.
                    <br /><br />
                    I gained valuable experience working with Agile processes, code review, APIs and databases, as well as experience working with a team of awesome developers.
                    </div>
                </div>
                <br />
                </div>
            </div>
            </div>

            
        );
    }
}
export default Experience;