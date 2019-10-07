import React, {useReducer, useState} from 'react';
import styled from 'styled-components'
import {MyResponsiveStream} from "./Chart";
import DisplayButton from "./DisplayButton";
import {Container, H3} from "./Common";
import {ResponsiveStream} from "@nivo/stream";
import {NewButton} from "./Appointment";


const Chart = styled.div`
    width: 100%;
    height: 60%;
    color: black;
`;

const StyledContainer = styled(Container)`
    color:black;
    
`;

const Result = styled.div`
    width: 90%;
    margin-left: 40px;
`;

const Resulttext = styled.p`
    color: white;
    font-size: 15px;
`;
const ButtonContainer = styled(Container)`
  height: 39%;
  width: 100%;
`;
const TextContainer = styled(ButtonContainer)`
  height: 59%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 83vh;
`;

const P = styled.p`
    width: 90%;
`

function reducer(state, action) {
    switch (action.type) {
        case 'Mood':
            return {
                data: ['Mood']
            };
        case 'Energy':
            return {
                data: ['Energy']
            };
        case "Engagement":
            return {
                data: ['Engagement']
            };
        case "Reset":
            return {
                data: ['Mood', 'Energy', 'Engagement']
            };
        default:
            return state;
    }
}
export function ChartView(){

    const initialState = [0, 0, 0];
    const initialData = {
        data: [ 'Mood', 'Energy', 'Engagement']
    };
    const[state, dispatch] = useReducer(reducer, initialData);
    const[buttonState, setButton] = useState(initialState);

    let data = [ 'Mood', 'Energy', 'Engagement', 'Reset'];

    const handleClick = (event) => {
        var arr = [...initialState];
        arr[event.currentTarget.id] = 1;
        setButton(arr);
        dispatch({type: event.target.value});
    };

    console.log(state);
    return (
        <Container main>
            <LeftContainer>
                <ButtonContainer grey>
                    {data.map((value, index) =>
                        <NewButton key={index} id={index} active={buttonState[index]} onClick={handleClick} value={value}>{value}</NewButton>
                    )}
                </ButtonContainer>
                <TextContainer grey>
                    <H3>Description</H3>
                    <P>Mood is an emotional state which typically described as having a positive or negative valence. In contrast to emotions, feelings, or affects, moods are less specific, less intense and less likely to be provoked or instantiated by a particular stimulus or event.</P>
                </TextContainer>
            </LeftContainer>
            <StyledContainer blue>
                <Chart>
                    <MyResponsiveStream data={state.data}/>
                </Chart>
                <Result>
                    <Resulttext>Your Current Mood Score is 87 </Resulttext>
                    <Resulttext>Your score is very high. This means that you're currently in a really good mood. But that doesn't mean you can now just stop with the exercises. Keep up the good work to maintain it! </Resulttext>
                </Result>
            </StyledContainer>
        </Container>
    );
}



