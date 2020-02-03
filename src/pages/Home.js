import React, { Component } from 'react';
// import {  Redirect } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import Body from '../components/Body/Body'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <Body />
                

            </div>
        )
    }
}

export default Home