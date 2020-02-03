import React, { Component } from 'react';
// import {  Redirect } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import Title from '../components/Title/Title'
import Content from '../components/Tabs/Tabs'
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
                <Title />
                <Content />
                

            </div>
        )
    }
}

export default Home