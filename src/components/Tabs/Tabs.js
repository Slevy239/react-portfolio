import React, { Component} from 'react';
import {Tab, Tabs } from 'react-mdl';

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>About Me</Tab>
                    <Tab>Applications</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Education</Tab>
                    <Tab>Contact Information</Tab>
                </Tabs>
                {/* <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section> */}
            </div>    
        );
    }
}
export default Content