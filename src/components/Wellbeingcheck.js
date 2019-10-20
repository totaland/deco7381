import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import classNames from 'classnames';
import styled from 'styled-components'
import './activity.css'
import {Redirect} from "react-router-dom";
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

const InputFeedback = ({error}) =>
    error ? (
        <div className={classNames("input-feedback")}>{error}</div>
    ) : null;


const RadioButton = ({
                         field: {name, value, onChange, onBlur},
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

const questionnaires = [
    "I get along well with others",
    "I tire quickly",
    "I feel no interest in things",
    "I feel stressed at work/school",
    "I blame myself for things",
    "I feel irritated",
    "I feel unhappy in my marriage/significant relationship",
    "I have thoughts of ending my life",
    "I feel weak",
    "I feel fearful",
    "After heavy drinking, I need a drink the next morning to get going.",
    "I find my work/school satisfying",
    "I am a happy person",
    "I work/study too much",
    "I feel worthless",
    "I am concerned about family troubles",
    "I have an unfulfilling sex life",
    "I feel lonely",
    "I have frequent arguments",
    "I feel loved and wanted",
    "I enjoy my spare time",
    "I have difficulty concentrating",
    "I feel hopeless about the future",
    "I like myself",
    "Disturbing thoughts come into my mind that I cannot get rid of",
    "I feel annoyed by people who criticize my drinking",
    "I have an upset stomach",
    "I am not working/studying as well as I used to",
    "My heart pounds too much",
    "I have trouble getting along with friends and close acquaintances",
    "I am satisfied with my life",
    "I have trouble at work/school because of drinking or drug use",
    "I feel that something bad is going to happen",
    "I have sore muscles",
    "I feel afraid of open spaces, of driving, or being on buses, subways, and so forth",
    "I feel nervous",
    "I feel my love relationships are full and complete",
    "I feel that I am not doing well at work/school",
    "I have too many disagreements at work/school",
    "I feel something is wrong with my mind",
    "I have trouble falling asleep or staying asleep",
    "I feel blue",
    "I am satisfied with my relationships with others",
    "I feel angry enough at work/school to do something I might regret",
    "I have headaches",
];

const fieldItems = ["0","1","2","3","4"];

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
                <InputFeedback error={error}/>
                }
            </fieldset>
        </div>
    );
};



const Wellbeingcheck = () => {
    const [redirect, setRedirect] = useState(false);


    const calculateScore = (data) => {
    };
    if (redirect) {
        return <Redirect to={'/progress'}/>
    }
    return (
        <div className="app">
            <H1>WELLBEING CHECK</H1>
            <Formik
                initialValues={{}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        console.log(values)
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
                                    key={index}
                                    name={index}
                                    label={value}
                                    value={values.radioGroup}
                                    error={errors.radioGroup}
                                    touched={touched.radioGroup}
                                >
                                    {fieldItems.map((value1,index1) => (
                                        <Field
                                            key={index}
                                            component={RadioButton}
                                            name={index}
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
}

export default Wellbeingcheck;