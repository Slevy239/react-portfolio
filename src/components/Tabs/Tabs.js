import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="About Me" {...a11yProps(0)} />
                    <Tab label="Applications" {...a11yProps(1)} />
                    <Tab label="Experience" {...a11yProps(2)} />
                    <Tab label="Education" {...a11yProps(3)} />
                    <Tab label="Contact Information" {...a11yProps(4)} />


                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">About Me</Typography>
                        <hr></hr>
                        <br></br>
                        <Typography>
                            Motivated Full Stack Web Developer with a strong background in communications. Brings hard work
                        and dedication inspired by encountering problems and finding an effective solution. Strong
                        collaboration skills from previous professional experience. Excels at customer service and
                        finding solutions to every situation in the workplace.
                        </Typography>
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={3}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography>Hello</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography>Hello</Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography>Hello</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
            <TabPanel value={value} index={3}>
                Education
      </TabPanel>
            <TabPanel value={value} index={4}>
                Contact
      </TabPanel>
        </div>
    );
}
