import React, { Component } from 'react';
import '../App.css';

class Education extends Component {

    render(){
        return (
            <div class="content">
            <div class="education">
            <div style={{width:"80%"}}>
                <h2>university of georgia</h2>
                <h3>B.S. Computer Science</h3>
                <h4>Graduation <b>May 2019</b> </h4>
                <h4>GPA: 3.76 / 4.00</h4>
                <div style={{height:"30px"}}></div>
                <div class="job">
                <b>Unofficial Transcript: </b> <a href="_to_transcript">[ PDF ]</a>
                <br />
                <br />
                <b>Coursework: </b> Data Structures, Systems Programming, Software Engineering, Operating Systems, Theory of Computation, Computer Architecture, Artificial Intelligence, Data Mining, Ethics in Computing
                <br />
                <br />
                <b>Honors: </b> Zell Miller Scholarship, Alumni Association Endowed Scholar, Sam and Grace Murray Scholarship
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Education;