import React, { Component } from 'react';
// import {  Redirect } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import Title from '../components/Title/Title'
import TabContent from '../components/Tabs/Tabs'
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
                <TabContent />
                

            </div>
        )
    }
}

export default Home