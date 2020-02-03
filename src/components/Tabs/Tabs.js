import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div style={{ width: '80%', margin: 'auto' }}>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardText>
                            <p>Motivated Full Stack Web Developer with a strong background in communications. Brings hard work
                                        and dedication inspired by encountering problems and finding an effective solution. Strong
                                        collaboration skills from previous professional experience. Excels at customer service and
                        finding solutions to every situation in the workplace.</p>
                        </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <Grid className='grid'>
                        <Cell col={4}>

                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Pateint First</CardTitle>
                                <CardText>

                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                                <CardText>

                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>

                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                                <CardText>

                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                                <CardText>

                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Experience</h1>
                    <Grid>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle>
                                    June 2017 – Current
                        </CardTitle>
                                <CardText>
                                    <h3>Crowded Castle Brewing Company</h3>
                                    <h4>Server/Bartender</h4>
                                    <p>Promote, manage and book musicians for private events. Track inventory with Microsoft Excel.</p>
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle>
                                    October 2018 - May 2019
                        </CardTitle>
                                <CardText>
                                    <h3>Quench USA Inc.</h3>
                                    <h4>Job Title</h4>
                                    <p>Handled technician scheduling for large metropolitan markets around the U.S. Primarily used
                                        spreadsheets to handle and manage schedule data. Worked in groups to tackle appointment backlog
                                        across multiple markets. Relayed information about products to technicians and customers. Gave
                                customer support when issues were escalated beyond the technician.</p>
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle>
                                    September 2012 – May 2016
                        </CardTitle>
                                <CardText>
                                    <h3>Paoli Pharmacy</h3>
                                    <h4>Pharmacy Technician</h4>
                                    <p>
                                        Managed inventory and prescriptions through pharmacy software. Assisted pharmacist with filling
                                        prescriptions. Aided customers with over-the-counter products. Built relationships with return
                                patrons. Learned fundamental customer service and communication skills.</p>
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>Education</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div><h1>Contact info</h1></div>
            )
        }

    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>About Me</Tab>
                    <Tab>Applications</Tab>
                    <Tab>Experience</Tab>
                    <Tab>Education</Tab>
                    <Tab>Contact Information</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default TabContent;