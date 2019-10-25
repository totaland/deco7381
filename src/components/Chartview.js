import React, {useContext, useReducer, useState} from 'react';
import styled from 'styled-components'
import {MyResponsiveStream} from "./StressChart";
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

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
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

    const [active, setActive] = useState(false);
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
    const [explainState, setExplain] = useState(null);
    const [scoreState, setScore] = useState(null);

    let data = ['Depression','Anxiety','Stress','Comparisons'];
    let data1 = ['Symptom Distress Scale','Interpersonal Relations Scale','Social Role Scale','Comparisons'];
    let descriptionItem = [
        'The concept of Depression was popularized by Kahn (1990), who related this concept to the notion of psychological presence. According to his definition, Depression refers to the state in which individuals express their entire self--physically, cognitively, and emotionally--in their role.',
        'Anxiety psychology (EP) is a collection of mind-body approaches for understanding and improving human functioning. EP focuses on the relationship between thoughts, emotions, sensations, and behaviors, and known bioAnxiety systems (such as meridians and the biofield).',
        'Stress is an emotional state which typically described as having a positive or negative valence. In contrast to emotions, feelings, or affects, Stresss are less specific, less intense and less likely to be provoked or instantiated by a particular stimulus or event.',
        'Select Stress, Anxiety or Depression for more details.',
    ];
    let wellBeingItem = [
        'The construct of Symptom Distress was induced from a review of the literature, extension of previously developed scales, and in-depth interviews with patients (Beecher, 1957; Hinton, 1963; McCorkle & Young, 1978; Schneider, 1976; Twycross, 1972). Based upon earlier works by Beecher (1957), Hinton (1963), and Twycross (1972), the SDS became one of the first scales to measure symptoms associated with cancer. ',
        'The interpersonal relationship scale or modifications of the scale are used to assess overall relationship quality. The scale has been widely used to study the effectiveness of relationship enhancement programs for premarital or marital couples.',
        'In human life, social roles are ubiquitous. Historically, social and personality psychologists sought to understand the relation between social roles and psychological functioning.',
        'Select Symptom Distress Scale, Interpersonal Relations Scale or Social Role Scale for more details.'
    ];

    let wellBeingScoreExplain = [
        'Your wellbeing score indicates that you are the Thriving range. That is great to hear! You are currently in the top 20% of all previous uprise participants for wellbeing. Your score is relative to others so your personal experience might be different.',
        'Your wellbeing score indicates that you are the Average range, compared to the global population. Most people in this range say that they are doing ok but they also have some pretty hard days as well. There is spacec to feel better than this and the Above Average range is not too far away. Using the uprise skills for a few weeks can help.',
        'Your wellbeing score indicates that you are the  Surviving, compared to the global population. Some people find this hard to hear and others say this score matches how they normally feel. We are sharing it because we hope that it helps you to see that you do not have to live with below average wellbeing. Using the uprise skills can help you to improve your wellbeing score. In addition, you might want to consider talking to your doctor about other support options. We would be happy to give more information about your Surviving score to feel free to ask your coach about it. We are sorry to hear that things are probably a bit tough for you right now. If you need urgent assistance, we recommend placing a confidential call with a mental health hotline in your region.',
        'Take a wellbeing questionnaire'
    ];
    let wellbeingScoreList = [
        state2.depressionScore,
        state2.anxietyScore,
        state2.stressScore,
        'You have no score yet'
    ]
    let stressScoreExplain = [
        'Your stress score indicates that you are the Thriving range. That is great to hear! You are currently in the top 20% of all previous uprise participants for stress exercise. Your score is relative to others so your personal experience might be different.',
        'Your stress score indicates that you are the Average range, compared to the global population. Most people in this range say that they are doing ok but they also have some pretty hard days as well. There is spacec to feel better than this and the Above Average range is not too far away. Using the uprise skills for a few weeks can help.',
        'Your stress score indicates that you are the  surviving, compared to the global population. Some people find this hard to hear and others say this score matches how they normally feel. We are sharing it because we hope that it helps you to see that you do not have to live with below average stress score. Using the uprise skills can help you to improve your stress score. In addition, you might want to consider talking to your doctor about other support options. We would be happy to give more information about your Surviving score to feel free to ask your coach about it. We are sorry to hear that things are probably a bit tough for you right now. If you need urgent assistance, we recommend placing a confidential call with a mental health hotline in your region.',
        'Take a stress questionnaire'
    ]
    let stressScoreList = [
        state2.distressScore,
        state2.interPersonalScore,
        state2.socialScore,
        'You have no score yet'
    ]

    const checkChart = state2.wellBeing ? <WellBeing data={wellBeing.data}/> : <MyResponsiveStream data={state.data}/>;
    const checkButton = state2.wellBeing ? data1 : data;
    const checkDescription = state2.wellBeing? wellBeingItem : descriptionItem;
    let scoreList = state2.wellBeing? wellbeingScoreList: stressScoreList;

    let scoreExplain = state2.wellBeing? wellBeingScoreExplain: stressScoreExplain;
    let score;
    let explain;
    let name = state2.wellBeing? "wellbeing": "stress";
    const handleClick = (event) => {
        var arr = [0,0,0,0];
        arr[event.currentTarget.id] = 1;
        if(arr===[0,0,0,1]) {
            setScore(scoreList[3]);
            setExplain(scoreExplain[3]);
        } else if(arr===[0,0,1,0] && state2.wellBeing) {
            setScore(scoreList[2])
            setExplain(scoreExplain[2]);
        } else if(arr===[0,1,0,0] && state2.wellBeing) {
            setScore(scoreList[1])
            setExplain(scoreExplain[1]);
        } else if(arr===[1,0,0,0] && state2.wellBeing) {
            setScore(scoreList[0])
            setExplain(scoreExplain[0]);
        }
        // if(arr===[0,0,0,1] && !state2.wellBeing) {
        //     score = scoreList[3]
        // } else if(arr===[0,0,1,0] && !state2.wellBeing) {
        //     score = scoreList[2]
        // } else if(arr===[0,1,0,0] && !state2.wellBeing) {
        //     score = scoreList[1]
        // } else if(arr===[1,0,0,0] && !state2.wellBeing) {
        //     score = scoreList[0]
        // }
        setButton(arr);
        if(state2.wellBeing){
            dispatchWellbeing({type: event.target.value})
        } else {
            dispatch1({type: event.target.value});
        }
    };

    const handleToggle = () => {
        setActive(!active);
        dispatch({type: "TOGGLE"})
        var arr = [0,0,0,1];
        setButton(arr);
        if(state2.wellBeing){
            dispatchWellbeing({type: "Comparisons"})
        }else {
            dispatch1({type: "Comparisons"})
        }
    };

    console.log(scoreState);
    console.log(scoreExplain);
    console.log(scoreList);
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
                    <DescriptionContainer>
                        <H3>Description</H3>
                        <NewButton active={active} onClick={handleToggle}>Toggle Chart</NewButton>
                    </DescriptionContainer>
                    {checkDescription.map((value, index)=>
                        <P key={index} id={index} active={buttonState[index]}>{value}</P>
                    )}
                </TextContainer>
            </LeftContainer>
            <StyledContainer blue>
                <Chart>
                    {checkChart}
                </Chart>
                <Result>
                    {/*I need a score set from charting, so it will be in App, also I need a description for this. */}
                    <Resulttext>Your Current {name} Score is: {scoreState} </Resulttext>
                    <Resulttext>{explainState}</Resulttext>
                </Result>
            </StyledContainer>
        </Container>
    );
}



