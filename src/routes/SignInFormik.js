import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {AppContext} from "../context/AppContext";
import {Auth, Hub} from "aws-amplify";
import Logo from "../images/Logo"

const Div = styled.div`
  padding: 3em;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  align-items: center;
`;

const Logopic = styled.img`
  width: 130px;
  margin-top: 130px;
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

const Label = styled.label`
  color: white;
  font-size: 20px;
  
`;

const FieldStyled = styled(Field)`
  width: 300px;
  height: 2em;
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: #6267D0 !important;
  outline: none;
  margin-top:0px;
  color:#C4C4C4;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 2em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
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

const LogoTitle = styled.p`
  color: white;
  font-size: 50px;
  margin: 10px;
`;

const Formline = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Signup = styled.div`
  display: flex;
  
`;

const Info = styled.p`
  color: #C4C4C4;
  margin: 0px;
  margin-right: 10px;
`;

const SignupLink = styled.a`
  color: #FFFFFF;
  margin: 0px;
  text-decoration: none;
`;

const Error = styled.div`
  color: #EFEF93;
  
`;

export default function SignInFormik(props) {

    const [signOut, state2, dispatch] = useContext(AppContext);
    //
    // useEffect(() => {
    //     Auth.currentAuthenticatedUser().then(user => {
    //         console.log(user);
    //         userHasAuthenticated(true);
    //     }).catch(e => {
    //         console.log(e);
    //     });
    //     return () => {
    //         userHasAuthenticated(true);
    //     }
    // },[]);
    useEffect( () => {
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
    },[]);


    return (

            <Formik
                initialValues={{username: '', password: ''}}
                validate={values => {
                    let errors = {};
                    if (!values.username) {
                        errors.username = "Username is required";
                    }
                    if (!values.password) {
                        errors.password = "Password is required";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        Auth.signIn({
                            username: values.username,
                            password: values.password
                        }).then(() => {
                            console.log("signed in");
                            // userHasAuthenticated(true);
                            dispatch({type: "LOGIN"});
                        }).catch(err => {
                            console.log(err);
                            alert(err.message);
                        });
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
                        <Button type="submit" disable={isSubmitting}>
                            Sign In
                        </Button>
                        <Signup>
                            <Info>Don't have an account?</Info>
                            <SignupLink href="/register">Sign up here</SignupLink>
                        </Signup>
                    </FormStyled>
                )}
            </Formik>

    )
}

