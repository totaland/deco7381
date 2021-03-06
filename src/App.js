import React, {useState, useEffect, useReducer} from "react";
import Amplify, {Auth, Storage, API, graphqlOperation} from "aws-amplify";
import awsmobile from "./aws-exports";
import ResponsiveAppBar from "./navbar/ResponsiveAppBar";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {AppContext} from "./context/AppContext.js";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
Amplify.configure(awsmobile);

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated2: true
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated2: false
            };
        case "SETUSER":
            return {
                ...state,
                username: action.username,
                userId: action.userId,
                email: action.email,
                phone: action.phone
            };
        case "SETWELLBEING":
            return {
                ...state,
                wellBeing: true,
            };
        case "SETSTRESS":
            return {
                ...state,
                wellBeing: false,
            };
        case "TOGGLE":
            return {
                ...state,
                wellBeing: !state.wellBeing,
            };
        case "SETSTRESSSCORE":
            return {
                ...state,
                depressionScore: action.depressionScore,
                anxietyScore: action.anxietyScore,
                stressScore: action.stressScore
            };
        case "SETWELLBEINGSCORE":
            return {
                ...state,
                distressScore: action.distressScore,
                interPersonalScore: action.interPersonalScore,
                socialScore: action.socialScore
            };

        default:
            return state;

    }
}

function App() {

    const secondInit = {
        isAuthenticated2: false,
        userId: "",
        username: "",
        email: "",
        phone: "",
        wellBeing: false,
        depressionScore: 0,
        anxietyScore: 0,
        stressScore: 0,
        distressScore: 0,
        interPersonalScore: 0,
        socialScore:0,
    }

    const [state2, dispatch] = useReducer(reducer, secondInit);

    useEffect(() => {
        async function fetchData() {
            try {
                await Auth.currentAuthenticatedUser();
                dispatch({type: "LOGIN"});
            } catch (e) {
                if (e !== "not authenticated") {
                    alert(e);
                }
            }
        }

        fetchData();
    }, [state2.userId]);

    useEffect(() => {
        async function fetchData() {
            try {
                await Auth.currentAuthenticatedUser()
                    .then(user => {
                        console.log(user);
                        // set the user
                        dispatch({
                            type: "SETUSER",
                            username: user.username,
                            userId: user.attributes.sub,
                            email: user.attributes.email,
                            phone: user.attributes.phone_number
                        });
                        dispatch({type: "LOGIN"});
                    })
                    .catch(e => {
                        console.log(e);
                    });

            } catch (e) {
                if (e !== "not authenticated") {
                    alert(e);
                }
            }
        }

        fetchData();
    }, [state2.userId]);

    // create user
    const createUser = async (patientDetails) => {
        await API.graphql(
            graphqlOperation(mutations.createPatient, {input: patientDetails})
        );
        console.log("user");
    };

       // create psychologist
    const createPsychologist = async (psychologistDetails) => {
        await API.graphql(
            graphqlOperation(mutations.createPsychologist, {input: psychologistDetails})
        );
    };

    // create appointment
    const createAppointment = async (appointment) => {

        await API.graphql(
            graphqlOperation(mutations.createAppointment, {input: appointment})
        );
        console.log("appointment");
    };

    // create fitness
    const createFitness = async (fitness) => {

        await API.graphql(
            graphqlOperation(mutations.createFitness, {input: fitness})
        );
        console.log("fitness");
    };

    // create wellness
    const createWellness = async (wellness) => {

        await API.graphql(
            graphqlOperation(mutations.createWellness, {input: wellness})
        );
        console.log("wellness");
    };
    const signOut = async e => {
        await Auth.signOut();
        dispatch({type: "LOGOUT"});
    };


    return (
        <BrowserRouter>
            <AppContext.Provider value={[signOut, state2, dispatch, createUser, createPsychologist, createAppointment,createFitness,createWellness]}>
                <div className="App site">
                    <ResponsiveAppBar/>
                    <Routes/>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );


}

export default App;