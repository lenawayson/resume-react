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
                <div class="job">
                        <h2>UGA Entrepreneurship Program</h2>
                        <b><h3>Graphic Design Specialist</h3></b>
                        <h4>August 2018-Present</h4>
                        <div class="job-text">
                        In preparation for regular events, I designed and produced promotional graphics for digital and print distribution.
                        This gives me an opportunity to be creative and practice my graphic design skills with Photoshop and Illustrator. I maintain 
                        all web content using Squarespace.
                        <br /><br />
                        I coordinate with other organizations to put on events such as Speaker Series and annual pitch competitions.
                        I promote the Entrepreneurship Program's initiatives and opportunites across campus.
                        </div>
                </div>
                <br />
                <div class="job">
                        <h2>Cafe au Chain</h2>
                        <b><h3>Co-Founder</h3></b>
                        <h4>January 2018 - February 2019</h4>
                        <div class="job-text">
                        Cafe au Chain was born from the UGA Idea Accelerator. My partner and I co-founded a blockchain startup, focused on improving transparency in the coffee supply chain.
                        <br /><br />
                        During the program, I led customer discovery interviews, developed a business model, did market research, and pitched the company at Demo Day.
                        We won 2nd place, and continued product development in the UGA Summer Launch Program.
                        </div>
                </div>
                <br />
                <div class="job">
                        <h2>Roundtable Development</h2>
                        <b><h3>Web Development Intern</h3></b>
                        <h4>January 2017 - May 2017</h4>
                        <div class="job-text">
                        I worked with the executive director to develop a new website for local tech incubator <a href="www.fourathens.com">Four Athens</a> using Ruby on Rails with Bootstrap on the frontend.
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