import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Button, Input, Search, StyledField, StyledForm, H3} from "./Common";
import {Container} from "./Common";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {SearchAlt} from "styled-icons/boxicons-regular/SearchAlt";
import DemoApp, {MonthYear, MonthYearButton, Week, Weekday} from "./Calendar";
import DisplayButton from "./DisplayButton";
import Amplify, {Auth, Storage, API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";

// style
export const NewButton = styled(DisplayButton)`
  background-color: ${props=> props.active? "#6267D0": null};
  color: ${props=> props.active? "white": null}; 
`;

const StyledContainer = styled(Container)`
    overflow: auto!important;
`;

const RoundButton = styled(Button)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;
let buttonValue =[];
let details =[];
let buttons = [];

// main function
function Appointment(props) {
    const [state, setState] = useState(null);
    const[buttonState, setActiveButton] = useState([]);
    useEffect( ()=> {
        let appointment = async () => {
            await API.graphql(graphqlOperation(queries.listAppointments, {limit: 50})).then( res => {
                // appointmentButton=res.data.getAppointment.id.toString();
                console.log(res);
                let eventDetailsItem;
                for(let i=0; i<res.data.listAppointments.items.length; i ++) {
                    const {purpose, time} = res.data.listAppointments.items[i];
                    eventDetailsItem = {
                        title: purpose,
                        start: time
                    };
                    details.push(eventDetailsItem);
                    buttonValue.push(0);
                }
                setState(details);
                buttons = [...details];
                details=[];
                setActiveButton(buttonValue);
            });
        };
        appointment();
    },[]);

    console.log(details);

    function clickHandler(event) {
        var arr = [...buttonValue];
        arr[event.currentTarget.id] = 1;
        setActiveButton(arr);
    }

    const handleClick = () => {
        alert("clicked!");
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
                <H3>Upcoming Appointments</H3>
                {state && buttons.map((value, index) => (
                    <NewButton key={index} id={index} active={buttonState[index]} onClick={clickHandler}>{value.title} {value.start}</NewButton>)
                )}
                <RoundButton grey onClick={handleClick}>+</RoundButton>
            </Container>
            <StyledContainer blue>
                <DemoApp/>
            </StyledContainer>
        </Container>
    );
}

export default Appointment;