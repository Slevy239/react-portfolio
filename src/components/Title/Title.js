import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 id='title'>Full Stack Web Developer</h1>
                    </Container>
                </Jumbotron>

            </div>
        )
    }
}

export default Title