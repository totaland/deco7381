import React from 'react';
import styled from 'styled-components'
import {Container, Button, Input, Search, StyledField, StyledForm, H3} from "./Common";
import {ErrorMessage, Formik} from "formik";
import IntroductionVideo from "./IntroductionVideo";
import Wellbeingcheck from "./Wellbeingcheck";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import "./activity.css"
import Stressfitnesscheck from "./Stressfitnesscheck";

const Styledcontainer = styled(Container)`
    overflow: auto;
`;

const StyledTabs = styled(Tabs)`
    margin-top:40px
`;

const StyledTab = styled(Tab)`
    margin-top: 40px;
`;



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `0px solid ${theme.palette.divider}`,
    },
}));


 function Activities(props) {
     const classes = useStyles();
     const [value, setValue] = React.useState(0);

     const handleChange = (event, newValue) => {
         setValue(newValue);
     };
     return (
        <Container main>
            <Container grey>
                <Container search>
                    <Formik
                        initialValues={{ search: '' }}
                        validate={values => {
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <StyledForm type="submit" disabled={isSubmitting}>
                                <StyledField type="search" name="search" placeholder={"Search appointments..."}/>
                                <ErrorMessage name="search" component="div" />
                            </StyledForm>
                        )}
                    </Formik>
                    <Search/>
                </Container>

                <StyledTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Activity page"
                    className={classes.tabs}
                >
                    <StyledTab label="Introductory Video" {...a11yProps(0)} />
                    <StyledTab label="Wellbeing Check" {...a11yProps(1)} />
                    <StyledTab label="Stress Fitness Check" {...a11yProps(2)} />

                </StyledTabs>



            </Container>
            <Styledcontainer blue>
                <TabPanel value={value} index={0}>
                    <IntroductionVideo/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Wellbeingcheck/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stressfitnesscheck/>
                </TabPanel>
            </Styledcontainer>
        </Container>
    );
}

export default Activities;