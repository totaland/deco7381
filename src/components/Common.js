import React from "react";
import styled, {css} from "styled-components";
import {Field, Form} from "formik";
import {SearchAlt} from "styled-icons/boxicons-regular/SearchAlt";

// CSS to export
export const H3 = styled.h3`
  font-weight: bold;
  width: 90%;
  font-family: Arial, serif;
`;
/*#######################################################
                        Container
########################################################*/
export const Container = styled.div`
    border-radius: 11px;
    height: 83vh;
    display: flex;
    justify-content: space-around;

  ${props => props.main && css`
    background: white;
    width: 100%;
    padding: 2em;
  `}
  
  ${props => props.grey && css`
    background: #E4E6E8;
    color: #919191;
    width: 30%;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1em;
    & > ${H3} {
      align-items: flex-start;
    }
  `}
  
  ${props => props.blue && css`
    padding: 1em;
    background: #6267D0;
    color: white;
    width: 68%;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    flex-direction: column;
    justify-content: flex-start;
  `}
  
  ${props => props.search && css`
    background: white;
    color: white;
    width: 90%;
    justify-content: space-between;
    height: 40px;
    padding-left: 20px;
    padding-right: 10px;
    border-radius: 20px;
  `}
  
`;

/*#######################################################
                        Button
########################################################*/
export const PlainButton = ({children, onClick, className, ...props}) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};
export const Button = styled(PlainButton)`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 12px;
  border: none;
  -webkit-box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  
  /* Cream */
  ${props => props.cream && css`
      background: #efef93;
      color: #606060;
      height: 60px;
      border-radius: 11px;
      width: 90%;
  `}
  
  /* Grey like */
  ${props => props.grey && css`
      background: #9d9d9d;
      color: #efef93;
      height: 50px;
      border-radius: 30px;
  `}
  
  /* White button */
  ${props => props.white && css`
      background: white;
      color: black;
  `}
  
`;

/*#######################################################
                        Formik
########################################################*/

export const StyledField = styled(Field)`
    background-color: #fff;
    width: 100%;
    height: 40px;
    border: none;
    font-size: 1rem;
    line-height: 2em;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    outline: none;
`;

export const StyledForm = styled(Form)`
  width: 90%;
`;

export const Search = styled(SearchAlt)`
  width: 30px;
  color: grey;
`;


