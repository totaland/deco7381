import React, {useContext, useReducer, useState} from 'react';
import styled from 'styled-components'
import {MyResponsiveStream} from "./Chart";
import {Container, H3} from "./Common";
import {NewButton} from "./Appointment";
import {AppContext} from "../context/AppContext";
import {WellBeing} from "./WellBeing";

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
        case 'Stress':
            return {
                data: ['Stress']
            };
        case 'Anxiety':
            return {
                data: ['Anxiety']
            };
        case "Depression":
            return {
                data: ['Depression']
            };
        case "Comparisons":
            return {
                data: ['Stress', 'Anxiety', 'Depression']
            };
        default:
            return state;
    }
}

function wellBeingReducer(state, action) {
    switch (action.type) {
        case 'Symptom Distress Scale':
            return {
                data: ['Symptom Distress Scale']
            };
        case 'Interpersonal Relations Scale':
            return {
                data: ['Interpersonal Relations Scale']
            };
        case "Social Role Scale":
            return {
                data: ['Social Role Scale']
            };
        case "Comparisons":
            return {
                data: ['Symptom Distress Scale', 'Interpersonal Relations Scale', 'Social Role Scale']
            };
        default:
            return state;
    }
}
export function ChartView(){

    const [
        signOut,
        state2,
        dispatch,
        createUser, createPsychologist, createAppointment,createFitness,createWellness
    ] = useContext(AppContext);
    const initialState = [0, 0, 0,1];
    const initialData = {
        data: ['Stress', 'Anxiety', 'Depression']
    };
    const wellBeingInitialData = {
        data: ['Symptom Distress Scale', 'Interpersonal Relations Scale', 'Social Role Scale']
    };
    const[state, dispatch1] = useReducer(reducer, initialData);
    const[wellBeing, dispatchWellbeing] = useReducer(wellBeingReducer, wellBeingInitialData);

    const[buttonState, setButton] = useState(initialState);

    let data = ['Depression','Anxiety','Stress','Comparisons'];
    let data1 = ['Symptom Distress Scale','Interpersonal Relations Scale','Social Role Scale','Comparisons'];
    let descriptionItem = [
        'Stress is an emotional state which typically described as having a positive or negative valence. In contrast to emotions, feelings, or affects, Stresss are less specific, less intense and less likely to be provoked or instantiated by a particular stimulus or event.',
        'Anxiety psychology (EP) is a collection of mind-body approaches for understanding and improving human functioning. EP focuses on the relationship between thoughts, emotions, sensations, and behaviors, and known bioAnxiety systems (such as meridians and the biofield).',
        'The concept of Depression was popularized by Kahn (1990), who related this concept to the notion of psychological presence. According to his definition, Depression refers to the state in which individuals express their entire self--physically, cognitively, and emotionally--in their role.',
        'Select Stress, Anxiety or Depression for more details.'
    ];

    const checkChart = state2.wellBeing ? <WellBeing data={wellBeing.data}/> : <MyResponsiveStream data={state.data}/>;
    const checkButton = state2.wellBeing ? data1 : data;
    const handleClick = (event) => {
        var arr = [0,0,0,0];
        arr[event.currentTarget.id] = 1;
        setButton(arr);
        if(state2.wellBeing){
            dispatchWellbeing({type: event.target.value})
        } else {
            dispatch1({type: event.target.value});
        }
    };

    console.log(state);
    return (
        <Container main>
            <LeftContainer>
                <ButtonContainer grey>
                    {checkButton.map((value, index) =>
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
                    {/*<MyResponsiveStream data={state.data}/>*/}
                    {checkChart}
                </Chart>
                <Result>
                    <Resulttext>Your Current Stress Score is 87 </Resulttext>
                    <Resulttext>Your score is very high. This means that you're currently in a really good Stress. But that doesn't mean you can now just stop with the exercises. Keep up the good work to maintain it! </Resulttext>
                </Result>
            </StyledContainer>
        </Container>
    );
}



