import React from 'react';
import { Layout, Navigation, Header } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
const Nav = (props) => {
    // const handleClick = event => {

    // }

    return (
        <div style={{ height: '300px', position: 'relative' }}>
            <Layout style={{ background: 'url(https://live.staticflickr.com/4326/35912916822_633eea8e5b_b.jpg) center / cover' }}>
                <Header transparent title="Sam Levy" style={{ color: 'white' }}>
                    <Navigation>
                        <a href="#">Applications</a>
                        <a href="#">About Me</a>
                        <a href="#">Experience</a>
                        <a href="#">Education</a>
                        <a href="#">Contact Information</a>
                    </Navigation>
                </Header>
            </Layout>
        </div>
    )
}
export default Nav;