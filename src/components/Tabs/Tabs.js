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
import CardMedia from "@material-ui/core/CardMedia";
import img1 from "../../static/images/1280px-React-icon.svg.png";

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
            <TabPanel value={value} index={0} id="aboutTab">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h3" component="h2">
                            About Me
            </Typography>
                        <hr></hr>
                        <br></br>
                        <Typography>
                            Motivated Full Stack Web Developer with a strong background in
                            communications. Brings hard work and dedication inspired by
                            encountering problems and finding an effective solution. Strong
                            collaboration skills from previous professional experience. Excels
                            at customer service and finding solutions to every situation in
                            the workplace.
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
                                    color="textSecondary"
                                    component="p"
                                >
                                    Patient First is a health data collection app. It allows
                                    users to quickly and easily upload health-related data, view
                                    trends and share with their primary care providers. Allowing
                                    for providers to have more data on a patient’s daily health
                                    trends to better diagnose/treat their conditions. This
                                    application uses React, MongoDb and Passport.Js.
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                GitHub
                </Button>
                            <Button size="small" color="primary">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    iPlaylist
                  </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    iPlaylist is a fully customizable web application where
                                    users can create their own playlists and contribute to the
                                    community playlist. Users are able to sign up, search for
                                    their favorite songs, create unique playlists, add them to a
                                    public playlist, and upvote and downvote songs. Uses:
                                    Javascript, JQuery, mySQL, NodeJs, Passport.Js, NodeJs,
                                    Deezer API
                  </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    WebScrape
                  </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    This application uses Cheerio to collect articles from the
                                    Sports Section of the New York Times. The articles are then
                                    stored in the Mongo Database as documents. Express allows
                                    the application to display the information that is in the
                                    database. Once displayed, the user can saved articles and
                                    add/delete comments that are associated with the given
                    article.{" "}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="">
                                Live Site
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid container spacing={3}>
                    <Card className={classes.root} id="apCard">
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    WebScrape
                                    </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    This application uses Cheerio to collect articles from the
                                    Sports Section of the New York Times. The articles are then
                                    stored in the Mongo Database as documents. Express allows
                                    the application to display the information that is in the
                                    database. Once displayed, the user can saved articles and
                                    add/delete comments that are associated with the given
                                    article.
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                GitHub
                </Button>
                            <Button size="small" color="primary" href="">
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
                    <Typography variant="h3" component="h2">
                        Education
          </Typography>
                </Card>
                <br></br>
                <Grid spacing={3}>
                    <Card>
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
                                Focus in Media Studies. Produced audio for ‘Sankofa’, a student
                                run film production that won Gold at the 2019 Student Academy
                                Awards for Documentary.
              </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <br></br>
                <Grid spacing={3}>
                    <Card>
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
                                A 24-week intensive program focused on gaining technical
                                programming skills in HTML5, CSS3, Javascript, JQuery,
                                Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                                Handelbars.js & ReactJS.
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
                            <Typography>slevy239@gmail.com</Typography>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">Phone</Typography>
                            <br></br>
                            <Typography>610-420-9311</Typography>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">LinkedIn</Typography>
                            <br></br>
                            <Typography>https://www.linkedin.com/in/samuel-d-levy/</Typography>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card id='contactCard'>
                        <CardContent>
                            <Typography variant="h5" component="h5">GitHub</Typography>
                            <br></br>
                            <Typography>https://github.com/Slevy239</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </TabPanel>
        </div>
    );
}
