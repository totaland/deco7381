import React from 'react';
import styled, {css} from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 12px;
  border: none;
  -webkit-box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 2px -1px rgba(0,0,0,0.75);
  
  background-color: ${props => props.active? "red" : null};
  /* Cream */
  ${props => props.cream && css`
      background: #efef93;
      color: #606060;
      height: 40px;
      border-radius: 11px;
      width: 90%;
  `}
  
  /* Grey like */
  ${props => props.grey && css`
      background: #9d9d9d;
      color: #efef93;
      height: 40px;
      border-radius: 30px;
  `}
  
  /* White button */
  ${props => props.white && css`
      background: white;
      color: black;
  `}
  
`;


function DisplayButton({children, active, className, id, onClick, value}) {

    return (
        <Button cream onClick={onClick} active ={active} id={id} className={className} value={value}>
            {children}
        </Button>
    )
}

export default DisplayButton;


