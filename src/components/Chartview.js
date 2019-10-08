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
    display: ${props=> props.active? 'block': 'none'};
`;

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
        case "Comparisons":
            return {
                data: ['Mood', 'Energy', 'Engagement']
            };
        default:
            return state;
    }
}
export function ChartView(){

    const initialState = [0, 0, 0,1];
    const initialData = {
        data: [ 'Mood', 'Energy', 'Engagement']
    };
    const[state, dispatch] = useReducer(reducer, initialData);
    const[buttonState, setButton] = useState(initialState);

    let data = [ 'Mood', 'Energy', 'Engagement', 'Comparisons'];
    let descriptionItem = [
        'Mood is an emotional state which typically described as having a positive or negative valence. In contrast to emotions, feelings, or affects, moods are less specific, less intense and less likely to be provoked or instantiated by a particular stimulus or event.',
        'Energy psychology (EP) is a collection of mind-body approaches for understanding and improving human functioning. EP focuses on the relationship between thoughts, emotions, sensations, and behaviors, and known bioenergy systems (such as meridians and the biofield).',
        'The concept of engagement was popularized by Kahn (1990), who related this concept to the notion of psychological presence. According to his definition, engagement refers to the state in which individuals express their entire self--physically, cognitively, and emotionally--in their role.',
        'Select Mood, Energy or Engagement for more details.'
    ];

    const handleClick = (event) => {
        var arr = [0,0,0,0];
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
                    {descriptionItem.map((value, index)=>
                        <P key={index} id={index} active={buttonState[index]}>{value}</P>
                    )}
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



