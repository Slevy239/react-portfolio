import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

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
                        <div id='Background'>
                        <h1 id='title'>Full Stack Web Developer</h1>
                        </div>
                    </Container>
                </Jumbotron>

            </div>
        )
    }
}

export default Title