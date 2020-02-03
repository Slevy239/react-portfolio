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
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        {/* <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle> */}
                        <CardText>
                            <p>Motivated Full Stack Web Developer with a strong background in communications. Brings hard work
                                        and dedication inspired by encountering problems and finding an effective solution. Strong
                                        collaboration skills from previous professional experience. Excels at customer service and
                        finding solutions to every situation in the workplace.</p>            </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is Contact info</h1></div>
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