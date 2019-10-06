import React, {useContext, useState} from "react";
import styled from "styled-components";
import {AppContext} from "../context/AppContext";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Auth} from "aws-amplify";
import * as yup from "yup";
import Logo from "../images/Logo";

const Div = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;
  height: 100%;
  vertical-align: middle;
  align-items: center;
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #6267D0;
  padding: 0px;
  align-items: center;
  border-radius: 3px;
`;

const FieldStyled = styled(Field)`
  width: 300px;
  height: 2em;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent !important;
  outline: none;
  margin-top:0px;
  color:#C4C4C4;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 2em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    
  }
  
`;

const Button = styled.button`
  width: 300px;
  background-color: #EFEF93;
  border: none;
  padding: 1em 2em;
  border-radius: 30px;
  color: #606060;
  margin-top: 40px;
  margin-bottom: 2em;
  font-size: 1rem;
  cursor:pointer;
`;

const Error = styled.div`
  color: #EFEF93;
`;

const Formline = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;


const LogoTitle = styled.p`
  color: white;
  font-size: 50px;
  margin: 10px;
`;

const Logopic = styled.img`
  width: 130px;
  margin-top: 90px;
`;

const Label = styled.label`
  color: white;
  font-size: 20px;
  
`;

const schema = yup.object({
    username: yup.string().required('Please Enter a username'),
    email: yup
        .string()
        .email()
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password')
        .min(8, 'At least 8 chars')
        .matches(/[a-z]/, 'At least one lowercase char')
        .matches(/[A-Z]/, 'At least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'At least 1 number or special char (@,!,#, etc).'),
    phone_number: yup
        .string()
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Must included country code'),
});

export default function RegisterForm(props) {

    const [signOut, state2, dispatch] = useContext(AppContext);

    const [initialValue, setValues] = useState({newUser: null,});
    if(initialValue.newUser === null){
        return (

            <Formik
                validationSchema={schema}
                initialValues={{username: "", email: "", password: "", phone_number: ""}}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = "Email is required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    if(!values.username) {
                        errors.username = "Username is required"
                    }
                    if (!values.password) {
                        errors.password = "Password is required";
                    }
                    if (!values.phone_number) {
                        errors.phone_number = "Phone number is required";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        try {
                            const newUser = Auth.signUp({
                                username: values.username,
                                password: values.password,
                                attributes: {
                                    email: values.email,
                                    phone_number: values.phone_number
                                }
                            })
                                .then(() => console.log("signed up"))
                                .catch(err => {
                                    console.log(err);
                                    alert(err.message);
                                });
                            setValues({
                                newUser: newUser
                            });
                        } catch (e) {
                            alert(e.message);
                        }

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <FormStyled>
                        <Logopic src={Logo} alt='logo'/>
                        <LogoTitle>Mind Initiative</LogoTitle>
                        <Formline>
                            <Label>User Name</Label>
                            <FieldStyled type="text" name="username" />
                            <ErrorMessage name="username" component={Error}/>
                        </Formline>
                        <Formline>
                            <Label>Password</Label>
                            <FieldStyled type="password" name="password" />
                            <ErrorMessage name="password" component={Error}/>
                        </Formline>
                        <Formline>
                            <Label>E-mail</Label>
                            <FieldStyled
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component={Error}/>
                        </Formline>
                        <Formline>
                            <Label>Phone</Label>
                            <FieldStyled
                                type="text"
                                name="phone_number"
                            />
                            <ErrorMessage name="phone_number" component={Error}/>
                        </Formline>
                        <Button type="submit" disable={isSubmitting}>
                            Continue
                        </Button>
                    </FormStyled>
                )}
            </Formik>

        );
    } else {
        return (

            <Formik
                initialValues={{username: "", confirmation_code: ""}}
                validate={values => {
                    let errors = {};

                    if(!values.username) {
                        errors.username = "Username is required"
                    }
                    if (!values.confirmation_code) {
                        errors.confirmation_code = "Confirmation code is required";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        try {
                            Auth.confirmSignUp(values.username, values.confirmation_code.toString()).then(() => {
                                // userHasAuthenticated(true);
                                dispatch({type: "LOGIN"})
                            });
                        } catch (e) {
                            alert(e.message);
                        }

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <FormStyled>
                        <Logopic src={Logo} alt='logo'/>
                        <LogoTitle>Mind Initiative</LogoTitle>
                        <Formline>
                            <Label>User Name</Label>
                            <FieldStyled type="text" name="username" placeholder={"Username"}/>
                            <ErrorMessage name="username" component="div"/>
                        </Formline>
                        <Formline>
                            <Label>Confirmation Code</Label>
                            <FieldStyled type="number" name="confirmation_code"/>
                            <ErrorMessage name="confirmation_code" component="div"/>
                        </Formline>
                        <Button type="submit" disable={isSubmitting}>
                            Continue
                        </Button>
                    </FormStyled>
                )}
            </Formik>

        );
    }

}
