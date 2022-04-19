import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const AaccList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Ability: {
      jobTitle: "",
      duration: "",
      desc: [
        "Good at Programming & Science as well as Critical and Logical Thinking. Unique research ability, high adaptability, responsibility and curiosity. Self-studied Computer Vision, Web Programming, Algorithms, Python, C++, Raspberry Pi, Jetson Nano, Deep Learning, Robotics, etc.. Experienced with diverse types of hardware and software and have done many projects competitions with them."
      ]
    },
    Aspiration: {
      jobTitle: "",
      duration: "",
      desc: [
        "Humble in our aspirations, gracious in our success, resilient in our failure. I want to bring AI closer and more approachable to youngsters, specifically highschool students to make AI integrate into Vietnam better. Work in a professional environment and use my knowledge to improve Vietnamese people’s daily lives."
      ]
    },
    Creativity: {
      jobTitle: "",
      duration: "",
      desc: [
        "Have the ability to create technological products that serves different needs (attendance check, object detection, facemask detection, etc.. ). Have creative ways of approaching and executing problems. Volunteered in the frontline against Covid-19 to see problems that I could help solving with my inventions. Planned and designed “The Anti-Covid Intelligent Machine”’s functionalities, mechanism, etc.."
      ]
    },
    "Commitment": {
      jobTitle: "",
      duration: "",
      desc: [
        "Spent 7 months to create “The Anti-Covid Intelligent Machine” from scratch. Become an influencer in the Vietnamese AI field and make AI more popular and developmental especially to younger technology enthusiasts since AI could make a big impact on the society through its applications."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default AaccList;
