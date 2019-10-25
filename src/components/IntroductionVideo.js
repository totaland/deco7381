import React, {Component} from 'react';
import styled from 'styled-components'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Auth} from "aws-amplify";
import Logo from "../images/Logo";


const Video =styled.embed`
    transform: translateX(-50%);
    left: 50%;
    position:relative;
    border-radius: 15px;
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #6267D0;
  padding: 0px;
  align-items: center;
  border-radius: 3px;
`;

const FieldStyled = styled(Field)`
  width: 700px;
  height: 10em;
  border-radius:15px;
  border-bottom: 1px solid white;
  outline: none;
  margin-top:0px;
  color:#C4C4C4;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 2em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  background-color: #7478E2;
  border: 0px solid white;
  
`;

const Label = styled.label`
  color: white;
  font-size: 20px;
  
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

const Error = styled.div`
  color: #EFEF93;
`;

const Formline = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

class IntroductionVideo extends Component {
    render() {
        return (
            <div>
                <Video width="700" height="325" src="https://www.youtube.com/embed/R2825kDSo4M"/>
                <Formik
                    initialValues={{ feedback: ""}}
                    validate={values => {
                        let errors = {};
                        if (!values.feedback) {
                            errors.feedback = "Feedback is required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false);
                            resetForm({feedback:""});
                        }, 400);
                    }}
                >
                    {({isSubmitting}) => (
                        <FormStyled>
                            <Formline>
                                <Label>Feedback</Label>
                                <FieldStyled component="textarea" name="feedback" />
                                <ErrorMessage name="feedback" component={Error}/>
                            </Formline>
                            <Button type="submit" disable={isSubmitting}>
                                Continue
                            </Button>
                        </FormStyled>
                    )}
                </Formik>
            </div>
        );
    }
}

export default IntroductionVideo;