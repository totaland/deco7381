import React, {Component} from 'react';
import { render } from 'react-dom';
import { Formik, Field } from 'formik';
import classNames from 'classnames';
import styled from 'styled-components'
import './activity.css'



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


const Wellbeingcheck = () => (
    <div className="app">
        <h1>WELLBEING CHECK</h1>
        <Formik
            initialValues={{
                radioGroup: '',
                checkboxGroup: [],
                singleCheckbox: false
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
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


                    <RadioButtonGroup
                        id="radioGroup"
                        label="How satisfied are you with your life as a whole?"
                        value={values.radioGroup}
                        error={errors.radioGroup}
                        touched={touched.radioGroup}
                    >
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption1"
                            label="1"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="2"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="3"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="4"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="5"
                        />
                    </RadioButtonGroup>
                    <RadioButtonGroup
                        id="radioGroup"
                        label="How satisfied are you with your standard of living?"
                        value={values.radioGroup}
                        error={errors.radioGroup}
                        touched={touched.radioGroup}
                    >
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption1"
                            label="1"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="2"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="3"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="4"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="5"
                        />
                    </RadioButtonGroup>
                    <RadioButtonGroup
                        id="radioGroup"
                        label="How satisfied are you with your health?"
                        value={values.radioGroup}
                        error={errors.radioGroup}
                        touched={touched.radioGroup}
                    >
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption1"
                            label="1"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="2"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="3"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="4"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="5"
                        />
                    </RadioButtonGroup>
                    <RadioButtonGroup
                        id="radioGroup"
                        label="How satisfied are you with what you are currently achieving in life?"
                        value={values.radioGroup}
                        error={errors.radioGroup}
                        touched={touched.radioGroup}
                    >
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption1"
                            label="1"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="2"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="3"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="4"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="5"
                        />
                    </RadioButtonGroup>
                    <RadioButtonGroup
                        id="radioGroup"
                        label="How satisfied are you with your personal relationships?"
                        value={values.radioGroup}
                        error={errors.radioGroup}
                        touched={touched.radioGroup}
                    >
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption1"
                            label="1"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="2"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="3"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="4"
                        />
                        <Field
                            component={RadioButton}
                            name="radioGroup"
                            id="radioOption2"
                            label="5"
                        />
                    </RadioButtonGroup>


                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        />
    </div>
);


export default Wellbeingcheck;