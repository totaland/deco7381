import React from "react";
import {Switch} from "react-router-dom";
import SignInFormik from "./SignInFormik";
import RegisterFormik from "./RegisterFormik";
import Appointment from "../components/Appointment";
import {ChartView} from "../components/Chartview"
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Button from "../components/Button";
import Home from "../components/Home"
import Activities from "../components/Activities"

export default ({childProps}) => (
    <Switch>
        <AuthenticatedRoute path="/" exact component={Home} props={childProps}/>
        <AuthenticatedRoute path="/activities" exact component={Activities} props={childProps}/>
        <AuthenticatedRoute path="/appointment" exact component={Appointment} props={childProps}/>
        <AuthenticatedRoute path="/progress" exact component={ChartView} props={childProps}/>
        <AuthenticatedRoute path="/button" exact component={Button} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={SignInFormik}/>
        <UnauthenticatedRoute path="/register" exact component={RegisterFormik}/>
        {/*<UnauthenticatedRoute path="/login" exact component={SignInForm} props={childProps}/>*/}
        {/*<UnauthenticatedRoute path="/register" exact component={SignUpForm1}/>*/}
        {/* Finally, catch all unmatched routes */}
        {/*<Route component={NotFound} />*/}
    </Switch>
);
