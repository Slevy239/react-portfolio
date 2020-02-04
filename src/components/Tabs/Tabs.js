import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from '@material-ui/core/Link';

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
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
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
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    centered
                >
                    <Tab label="About Me" {...a11yProps(0)} />
                    <Tab label="Applications" {...a11yProps(1)} />
                    <Tab label="Experience" {...a11yProps(2)} />
                    <Tab label="Education" {...a11yProps(3)} />
                    <Tab label="Contact Information" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <Card className={classes.root} id='aboutTab'>
                    <CardContent>
                        <Typography variant="h3" component="h2">
                            About Me
            </Typography>
                        <hr></hr>
                        <br></br>
                        <Typography variant="h6" component="h4">
                            <Box lineHeight={2.5} m={1}>

                                Motivated Full Stack Web Developer with a strong background in
                                communications. Brings hard work and dedication inspired by
                                encountering problems and finding an effective solution. Strong
                                collaboration skills from previous professional experience. Excels
                                at customer service and finding solutions to every situation in
                                the workplace.
                            </Box>
                        </Typography>
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={1} id="appTab">
                <Typography variant="h3" component="h2" id="appTitle">
                    Deployed Applications
        </Typography>
                <br></br>
                <hr></hr>
                <Grid container spacing={2}>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Patient First
                                    </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>

                                        Patient First is a health data collection app. It allows
                                        users to quickly and easily upload health-related data, view
                                        trends and share with their primary care providers. Allowing
                                        for providers to have more data on a patient’s daily health
                                        trends to better diagnose/treat their conditions. This
                                        application uses React, MongoDb and Passport.Js.
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/maleszewskid/Project-3'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href='https://patient-first.herokuapp.com/'>
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    iPlaylist
                  </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>

                                        iPlaylist is a fully customizable web application where
                                        users can create their own playlists and contribute to the
                                        community playlist. Users are able to sign up, search for
                                        their favorite songs, create unique playlists, add them to a
                                        public playlist, and upvote and downvote songs. Uses:
                                        Javascript, JQuery, mySQL, NodeJs, Passport.Js, NodeJs,
                                        Deezer API
                                        </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/Slevy239/iPlaylist'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="https://iplaylist-2019.herokuapp.com/login">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    GoogleBookSearch
                  </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>
                                        GoogleBookSearch creates readings lists out of an API created in this application. Using React router, this application is a single page application with dynamic components Users are able to manipulate books to add, save and delete them from a given list.
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/Slevy239/GoogleBookSearch'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="https://react-bookshelf2020.herokuapp.com/">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container spacing={3}>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Clicky Game
                                    </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>
                                        To begin, click an image and the first score is recored. Then the images get shuffled and the user has to pick an image that has previously not been clicked. This will continue until there are no more options left.
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/Slevy239/Clicky-Game'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="https://clickgame-2020.herokuapp.com/">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Eat Da Burger!
                                    </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>
                                        A NodeJs, Express, Handlebars, and MySQL application that allows users to create items, store it in the database and update it's state.                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/Slevy239/burger'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="https://eat-a-burger-2019.herokuapp.com/">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Friend Finder
                                    </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    component="p"
                                >
                                    <Box lineHeight={2} m={1}>
                                        This application works as a dating app, with 10 questions that assess the compatibility with an individual who has already completed the survey. Once the survey is completed, the users input is added to the API for future users to match. While this information is added, the user gets matched with someone who is already in the API, a picture and their name is presented.
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href='https://github.com/Slevy239/FriendFinder'>
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="https://nameless-gorge-79367.herokuapp.com/">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>

                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2} id="expTab">
                <Typography variant="h3" component="h2" id="appTitle">
                    Work Experience
        </Typography>
                <br></br>
                <hr></hr>
                <Grid container spacing={3}>
                    <Card className={classes.root} id="expCard">
                        <CardContent>
                            <Typography variant="h12" component="h6">June 2017 – Current</Typography>
                            <Typography gutterBottom variant="h4" component="h4" id='Company'>Crowded Castle Brewing Company</Typography>
                            <Typography gutterBottom variant="h5" component="h2">Bartender</Typography>
                            <Typography>
                                Promote, manage and book musicians for private events. Track
                                inventory with Microsoft Excel.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.root} id="expCard">
                        <CardContent>
                            <Typography variant="h12" component="h6">October 2018 - May 2019</Typography>
                            <Typography gutterBottom variant="h4" component="h4" id='Company'>Quench USA Inc.</Typography>
                            <Typography gutterBottom variant="h5" component="h2">Scheudling Specialist</Typography>
                            <Typography>
                                Handled technician scheduling for large metropolitan markets around the U.S. Primarily used
                                      spreadsheets to handle and manage schedule data. Worked in groups to tackle appointment backlog
                                      across multiple markets. Relayed information about products to technicians and customers. Gave
                                      customer support when issues were escalated beyond the technician.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.root} id="expCard">
                        <CardContent>
                            <Typography variant="h12" component="h6">September 2012 – May 2016</Typography>
                            <Typography gutterBottom variant="h4" component="h4" id='Company'>Paoli Pharmacy</Typography>
                            <Typography gutterBottom variant="h5" component="h2">Pharmacy Technician</Typography>
                            <Typography>
                                Managed inventory and prescriptions through pharmacy software. Assisted pharmacist with filling
                                prescriptions. Aided customers with over-the-counter products. Built relationships with return
                                patrons. Learned fundamental customer service and communication skills.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3} id="edTab">
                <Card>
                    <Typography variant="h3" component="h2" id='EdTitle'>
                        Education
          </Typography>
                </Card>
                <br></br>
                <Grid container spacing={3}>
                    <Card id='EdCard'>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h4">
                                Villanova University
              </Typography>
                            <Typography variant="h5" component="subtitle1">
                                September 2014 - May 2018
              </Typography>
                            <Typography gutterBottom variant="h5" component="h5">
                                Bachelor of Liberal Arts in Communication
              </Typography>
                            <Typography>
                                <Box lineHeight={2} m={1}>
                                    Focus in Media Studies. Produced audio for ‘Sankofa’, a student
                                    run film production that won Gold at the 2019 Student Academy
                                Awards for Documentary.
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <br></br>
                <Grid container spacing={3}>
                    <Card id='EdCard'>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h4">
                                University of Pennsylvania
              </Typography>
                            <Typography variant="h5" component="subtitle1">
                                August 2019 - February 2020
              </Typography>
                            <Typography gutterBottom variant="h5" component="h5">
                                Coding Boot Camp
              </Typography>
                            <Typography>
                                <Box lineHeight={2} m={1}>

                                    A 24-week intensive program focused on gaining technical
                                    programming skills in HTML5, CSS3, Javascript, JQuery,
                                    Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                                    Handelbars.js & ReactJS.
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>

                <Card id='ContactTitle'>
                    <Typography variant="h3" component="h2">
                        Contact
                </Typography>
                </Card>

                <Grid >
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h1">Email</Typography>
                            <br></br>
                            <Link
                                component='button'
                                variant='h5'
                            >slevy239@gmail.com</Link>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">Phone</Typography>
                            <br></br>
                            <Link
                                component='button'
                                variant='h5'
                            >610-420-9311</Link>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">LinkedIn</Typography>
                            <br></br>
                            <Link
                                component='button'
                                variant='h5'
                            >https://www.linkedin.com/in/samuel-d-levy/</Link>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">GitHub</Typography>
                            <br></br>
                            <Link
                                component='button'
                                variant='h5'
                            >https://github.com/Slevy239</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </TabPanel>
        </div>
    );
}
