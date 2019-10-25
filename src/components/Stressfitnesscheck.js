import React, {Component, useContext, useReducer, useState} from 'react';
import { Formik, Field } from 'formik';
import classNames from 'classnames';
import styled from 'styled-components'
import './activity.css'
import {Redirect} from "react-router-dom";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";
import {AppContext} from "../context/AppContext";
import {createFitness} from "../graphql/mutations";

const H1 = styled.h1`
    margin-left: 5%;
`;

const Button = styled.button`
  width: 200px;
  background-color: #EFEF93;
  border: none;
  padding: 1em 2em;
  border-radius: 30px;
  color: #606060;
  margin-top: 40px;
  margin-bottom: 2em;
  font-size: 1rem;
  cursor:pointer;
  height:40px;
`;

const Submit = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const questionnaires =[
    "I found it hard to wind down",
    "I was aware of dryness of my mouth",
    "I couldn't seem to experience any positive feeling at all",
    "I experienced breathing difficulty",
    "I found it hard to work up the initiative to do things",
    "I tend to over-react to situations",
    "I experienced trembling",
    "I felt that I was using a lot of nervous energy",
    "I was worried about situations in which I might panic and make a foll of myself",
    "I felt that I had nothing to look forward to",
    "I found myself getting agitated",
    "I found it hard to relax",
    "I felt down-hearted and blue",
    "I was intolerant of anything that kept me from getting on with what I was doing",
    "I felt I was close to panic",
    "I was unable to become enthusiastic about anything",
    "I felt I wasn't worth much as a person",
    "I felt that I was rather touchy",
    "I was aware of the action of my heart in the absence of physicalexertion",
    "I felt scared without any good reason",
    "I felt that life was meaningless",
];
const fieldItems = ["0","1","2","3"];


const InputFeedback = ({ error }) =>
    error ? (
        <div className={classNames("input-feedback")}>{error}</div>
    ) : null;


const RadioButton = ({
                         field: { name, value, onChange, onBlur },
                         id,
                         label,
                         className,
                         ...props
                     }) => {
    return (
        <div>
            <input
                name={name}
                id={id}
                type="radio"
                value={id} // could be something else for output?
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                className={classNames('radio-button')}
                {...props}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};


const RadioButtonGroup = ({
                              value,
                              error,
                              touched,
                              id,
                              label,
                              className,
                              children
                          }) => {
    const classes = classNames(
        'input-field',
        {
            'is-success': value || (!error && touched),
            'is-error': !!error && touched
        },
        className
    );

    return (
        <div className={classes}>
            <fieldset>
                <legend>{label}</legend>
                {children}
                {touched &&
                <InputFeedback error={error} />
                }
            </fieldset>
        </div>
    );
};


const Stressfitnesscheck = () => {
    const [
        signOut,
        state2,
        dispatch,
        createUser, createPsychologist, createAppointment,createFitness
    ] = useContext(AppContext);

    const initialState = {
        stressScore: 0,
        anxietyScore: 0,
        depressionScore: 0,
    };
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to={'/progress'}/>
    }
    return (
        <div>
            <H1>STRESS FITNESS CHECK</H1>
            <Formik
                initialValues={{}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(async () => {
                        const sScore = (parseInt(values.group0) + parseInt(values.group5) + parseInt(values.group7) + parseInt(values.group10) + parseInt(values.group11) + parseInt(values.group13) + parseInt(values.group17))*2;
                        const dScore = (parseInt(values.group2) + parseInt(values.group4) + parseInt(values.group9) + parseInt(values.group12) + parseInt(values.group15) + parseInt(values.group16) + parseInt(values.group20))*2;
                        const aScore = (parseInt(values.group1) + parseInt(values.group3) + parseInt(values.group6) + parseInt(values.group8) + parseInt(values.group14) + parseInt(values.group18) + parseInt(values.group19))*2;
                        try {
                            await API.graphql(graphqlOperation(queries.getPatient, {id: state2.userId})).then(async res => {
                                let id = String(res.data.getPatient.fitness.items.length) + "-" + state2.userId;
                                let id2 = String(0) + "-" + state2.userId;
                                let id3;
                                if (res.data.getPatient.fitness.items.length >= 1) {
                                    id3= id;
                                } else {
                                    id3 = id2;
                                }
                                const questionnaireDetails = {
                                    id: id3,
                                    depression: dScore,
                                    anxiety: aScore,
                                    stress: sScore,
                                    fitnessPatientId: state2.userId,
                                };
                                try {
                                    await createFitness(questionnaireDetails);
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                            dispatch({type: "SETSTRESS"});
                            console.log(dScore);
                            dispatch({type: "SETSTRESSSCORE", depressionScore: dScore, anxietyScore: aScore, stressScore: sScore});
                        } catch (e) {
                            console.log(e);
                        }
                        setSubmitting(false);
                        setRedirect(true);
                    }, 500);
                }}
                render={({
                             handleSubmit,
                             setFieldValue,
                             setFieldTouched,
                             values,
                             errors,
                             touched,
                             isSubmitting
                         }) => (
                    <form onSubmit={handleSubmit}>
                        {questionnaires.map(((value, index) =>
                                <RadioButtonGroup
                                    name={'group'+index}
                                    key={value}
                                    label={value}
                                    value={values.radioGroup}
                                    error={errors.radioGroup}
                                    touched={touched.radioGroup}
                                >
                                    {fieldItems.map((value1, index1) => (
                                        <Field
                                            component={RadioButton}
                                            key={'Field'+index}
                                            name={'group'+index}
                                            id={value1}
                                            label={index1}
                                        />
                                    ))}
                                </RadioButtonGroup>
                        ))}
                        <Submit>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Submit>
                    </form>
                )}
            />
        </div>
    );

};

export default Stressfitnesscheck;