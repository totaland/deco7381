import React, {useContext, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AppContext} from "../context/AppContext";
import styled from "styled-components";

const style = makeStyles(theme => ({
    li: {
        marginTop: "auto",
        marginBottom: "auto",
        paddingLeft: 15,
        paddingRight: 15
    },
    ul: {
        display: "flex",
        textDecoration: "none"
    }
}));

function SignedInNav() {
    const [signOut, state2, dispatch] = useContext(AppContext);
    const classes = style();
    return (
        <ul className={classes.ul}>
            <li className={classes.li}>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className={classes.li}>
                <NavLink to={"/activities"}>Activities</NavLink>
            </li>
            <li className={classes.li}>
                <NavLink to={"/appointment"}>Appointment</NavLink>
            </li>
            <li className={classes.li}>
                <NavLink to={"/progress"}>Progress</NavLink>
            </li>
            <li className={classes.li}>
                <NavLink to={"#"} onClick={signOut}>
                    Log Out
                </NavLink>
            </li>
        </ul>
    );
}

export default SignedInNav;
