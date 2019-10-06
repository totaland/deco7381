import React, {useContext, useEffect, useReducer, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import * as _ from 'lodash';
import './main.scss'
import styled from 'styled-components'
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import {API, Auth, graphqlOperation} from "aws-amplify";
import Logo from "../images/Logo";
import {AppContext} from "../context/AppContext";
import * as queries from "../graphql/queries";

const FieldStyle = styled(Field)`
  width: 100%;
  color: #919191;
`;
const TimeField = styled(FieldStyle)`
  width: 45%;
`;
const TimeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Div = styled.div`
  display: ${props=> props.open? "block" : "none"};
  position: absolute;
  z-index: 9;
  top: 27%;
  left: 55%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 2em;
  background-color: #E4E6E8;
  justify-content: flex-start;
  border-radius: 9px;
  min-width: 300px;
  color: #919191;
`;
const Button = styled.button`
  background-color: #efef93;
  border-radius: 9px;
  margin-top: 5%;
  border: none;
  padding: 0.5em 1em;
  width: 50%;
  margin-left: 25%;
  color: #919191;
`;

let hour = ['Hour','08','09','10','11','12','13','14','15','16','17'];
let minute = ['Minutes','00','15','30','45'];
let purpose = ['Choose Purpose',"General Purpose", 'Advice on Exercise', 'Specific Purpose'];
let psychologists = ['Choose Psychologist','Janice Johanson', 'Peter Merlak', 'John Dalington', 'Jennifer Anniston', 'Christoper Baylord'];
let specialisation = ['Choose desired specialisation', 'Anxiety', 'Consulting Psychologist', 'Stress Disorder'];

const psychologistsDetails = [
    {id: 1, email: 'janice@gmail.com', phone: "0434536603"},
    {id: 2, email: 'peter@gmail.com', phone: "0412345625"},
    {id: 3, email: 'john@gmail.com', phone: "0423323423"},
    {id: 4, email: 'chris@gmail.com', phone: "0432232234"},
    {id: 5, email: 'jennifer@gmail.com', phone: "0412222333"}
];

let psychologistID = '';
let time ='';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addEvent':
            return {
                ...state,
                calendarEvents: state.calendarEvents.concat({ // creates a new array
                    title: action.title,
                    start: action.start,
                    // allDay: action.allDay
                })
            };
        case 'removeEvent':
            return {
                ...state,
                calendarEvents: _.remove(state.calendarEvents, function(e) {
                    return e.title !== action.title;
                })
            };
        case 'open':
            return {
                ...state,
                open: !state.open
            };
        case 'setinput':
            return {
                ...state,
                input: action.input
            };
        case 'setdate':
            return {
                ...state,
                moment:  action.start
            }
        default:
            return state;
    }

};

let details =[];

/* #####################################################################################################################
                                        Main Function
######################################################################################################################*/

export default function DemoApp () {

    const calendarComponentRef = React.createRef();



    const [events, setEvents] = useState(null);
    // get all appointment from database
    useEffect( ()=>{
        async function getData() {
        try {
            await API.graphql(graphqlOperation(queries.listAppointments, {limit: 50})).then(async res => {
                console.log(res);
                let eventDetailsItem;
                for(let i=0; i<res.data.listAppointments.items.length; i ++) {
                    const {purpose, time} = res.data.listAppointments.items[i];
                    eventDetailsItem = {
                        title: purpose,
                        start: time
                    };
                    details.push(eventDetailsItem);
                }
                setEvents(details);
            })
        } catch (e) {
            console.log(e);
        }
        }
        getData();
    },[]);

    console.log(events);
    console.log(details);

    const initialState = {
        calendarWeekends: true,
        calendarEvents: details,
        open: false,
        input: "",
        moment: new Date()
    };

    // context
    const [
        signOut,
        state2,
        dispatch,
        createUser, createPsychologist, createAppointment
    ] = useContext(AppContext);

    useEffect(() => {
        async function fetchData() {
            try {
                await Auth.currentAuthenticatedUser();
            } catch (e) {
                if (e !== "not authenticated") {
                    alert(e);
                }
            }
        }

        fetchData();
    }, [state2.userId]);

    // state and dispatch
    const [state, dispatch1] = useReducer(reducer, initialState);
    console.log(state.calendarEvents);

    const patientDetails = {
        id: state2.userId,
        email: state2.email,
        phone: state2.phone
    };


    const handleDateClick = (arg) => {
        dispatch1({type: 'open'});
        time = arg.dateStr;
    };

    const handleEventClick = (info) => {
        dispatch1({type: 'open'});
        info.event.remove();
        dispatch1({type: 'removeEvent', title: info.event.title});
    };

    const getPsychologistID = (value) => {
        switch (value) {
            case 'Janice Johanson':
                return psychologistID = 1;
            case 'Peter Merlak':
                return psychologistID = 2;
            case 'John Dalington':
                return psychologistID = 3;
            case 'Christoper Baylord':
                return psychologistID = 4;
            case 'Jennifer Anniston':
                return psychologistID = 5;
        }
    }
    return (
        <Container>
        <div className='demo-app'>
            <Div open={state.open}>
                <Formik
                    initialValues={
                        {
                        hour:'Hour',
                        minute:'Minutes',
                        purpose:'Choose Purpose',
                        specialisation: 'Choose desired specialisation',
                        psychologist: 'Choose Psychologist'
                        }
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(async () => {
                            dispatch1({type: 'addEvent', title: values.purpose, start: time+'T'+values.hour+':'+values.minute+':00'});

                            try{
                                console.log(patientDetails);
                                await createUser(patientDetails);
                            } catch (e) {
                                console.log(e);
                            }
                            getPsychologistID(values.psychologist);

                            try {
                                await API.graphql(graphqlOperation(queries.getPatient, {id: state2.userId})).then(async res => {
                                    console.log(res);
                                    let id = psychologistID + "-" + state2.userId;
                                    let email;
                                    let phone;
                                    // get email, phone number
                                    if(psychologistID===1) {
                                        email = psychologistsDetails[0].email;
                                        phone = psychologistsDetails[0].phone;
                                    } else if(psychologistID===2) {
                                        email = psychologistsDetails[1].email;
                                        phone = psychologistsDetails[1].phone;
                                    } else if(psychologistID===3) {
                                        email = psychologistsDetails[2].email;
                                        phone = psychologistsDetails[2].phone;
                                    } else if(psychologistID===4) {
                                        email = psychologistsDetails[3].email;
                                        phone = psychologistsDetails[3].phone;
                                    }

                                    const psychologistDetailItem = {
                                        id: id,
                                        email: email,
                                        phone: phone,
                                    };
                                    try {
                                        await createPsychologist(psychologistDetailItem);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                });
                            } catch (e) {
                                console.log(e);
                            }
                            try{
                                await API.graphql(graphqlOperation(queries.getPatient, {id: state2.userId})).then(async res => {
                                    console.log(res);
                                    let id = String(res.data.getPatient.appointments.items.length) + "-" + state2.userId;
                                    let id2 = String(0) + "-" + state2.userId;
                                    let id3;
                                    if (res.data.getPatient.appointments.items.length >= 1) {
                                        id3= id;
                                    } else {
                                        id3 = id2;
                                    }
                                    const appointmentDetails = {
                                        id: id3,
                                        purpose: values.purpose,
                                        time: time+'T'+values.hour + ':' + values.minute+':00',
                                        appointmentPatientId: state2.userId,
                                        appointmentPsychologistId: psychologistID
                                    };
                                    try {
                                        await createAppointment(appointmentDetails);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                });
                            } catch (e) {
                                console.log(e);
                            }

                            dispatch1({type: 'open'});
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({isSubmitting}) => (
                        <FormStyle>
                            <h2>Choose Time</h2>
                            <TimeDiv>
                                <TimeField component={"select"} name={'hour'}>
                                    {hour.map((value, index) => (
                                            <option  value={value} key={index}>{value}</option>
                                        )
                                    )}
                                </TimeField>
                                :
                                <TimeField component={"select"} name={'minute'}>
                                    {minute.map((value, index) => (
                                        <option value={value} key={index}>{value}</option>
                                    ))}
                                </TimeField>
                            </TimeDiv>
                            <h2>Specialisation</h2>
                            <FieldStyle component={"select"} name="specialisation">
                                {specialisation.map((value, index) => (
                                    <option value={value} key={index}>{value}</option>
                                ))}
                            </FieldStyle>
                            <h2>Purpose</h2>
                            <FieldStyle component={"select"} name="purpose">
                                {purpose.map((value, index) => (
                                    <option value={value} key={index}>{value}</option>
                                ))}
                            </FieldStyle>
                            <h2>Psychologist</h2>
                            <FieldStyle component={"select"} name="psychologist">
                                {psychologists.map((value, index) => (
                                    <option value={value} key={index}>{value}</option>
                                ))}
                            </FieldStyle>
                            <Button type="submit" disabled={isSubmitting}>
                                Confirm
                            </Button>
                        </FormStyle>
                    )}
                </Formik>
            </Div>
            <div className='demo-app-calendar'>
                {state2.userId && events && <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    ref={ calendarComponentRef }
                    weekends={ state.calendarWeekends }
                    events={ state.calendarEvents }
                    dateClick={ handleDateClick }
                    eventClick={ handleEventClick }
                />}
            </div>
        </div>
        </Container>
    )
}
