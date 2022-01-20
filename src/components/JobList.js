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

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    cuutruyen: {
      jobTitle: "Translator @",
      duration: "MAR 2020 - NOV 2021",
      desc: [
        "Translate raw mangas/light novels from English to Vietnamese for cuutruyen.net website.",
        "Perform high precision and consistent traslations.",
        "Learnt many soft and communicating skills.",
        "Planning on joining the current website development team after highschool graduation."
      ]
    },
    NTMK: {
      jobTitle: "An Active Student @",
      duration: "AUG 2019 - current",
      desc: [
        "Parcitipated in many social/science activities and competitions.",
        "Member of MEU - Miki English Union Club (social) and head of STEAMK - Minh Khai Steam Club (science & robotics).",
        "Member of English & Informatics selection team - Bronze medal in 30 April Olympic Contest (English). ",
        "Consistent grades & fair GPA."
      ]
    },
    Activities: {
      jobTitle: "Knowledge Seeking @",
      duration: "Since i was born",
      desc: [
        "Parcitipated in the Massive Open Online Course (MOOC) Web Programming at the American Center HCM city - June to July 2019", //add picture of cirtificates smartly and elegantly 
        "Parcitipated in the Summer Tech Camp organized by the American Center HCM city - August 2020",
        "Parcitipated in the Global MakeCode Arcade Game Jam at the American Center HCM city (U.S Consulate x Steam for VietNam) - December 2021.",
        "Parcitipated in the English Language Teacher Professional Development Webinar: \"Applying technology in the English language classroom\" - August 2020.",
        "Part of many events & programs of different fields, especially science."
      ]
    },
    STEAMK: {
      jobTitle: "Head Student @",
      duration: "NOV 2021 - current",
      desc: [
        "Parcitipated and assisted/hosted knowledge sharing/teaching events.", //for future Hao: find a way to add picture of STEAMK here (workplace)
        "Cleaner/Furnisher of the workplace.",
        "Pioneer in new technologies and inform to others: Machine Learning, Raspberry Pi, Jetson Nano,..."
      ]
    },
    "Competitions": {
      jobTitle: "A Fierce Competitor @",
      duration: "Since i was born",
      desc: [
        "IELTS 7.0 at Grade 9.",
        "Honorable Award from the National Speaking English Contest 2020.",
        "Bronze medal in 30 April Olympic Contest (English).",
        "Runner-up prize in the RMIT Techgenius Competetion - Engineering category.", 
        "First place in the Scientific Research Competition of the school."
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

export default JobList;
