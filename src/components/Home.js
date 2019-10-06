import React from 'react';
import styled from 'styled-components'
import {Container, Button, Input, Search, StyledField, StyledForm, H3} from "./Common";
import introduction from "../images/introduction.png"
import question from "../images/question.png"
import arrowLeft from "../images/Arrowleft.png"
import arrowRight from "../images/Arrowright.png"

const Homecontainer = styled(Container)`
    width: 80%;
    height: 70%;
    padding: 20px;
`;

const Tipscontainer = styled(Homecontainer)`
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Tasks = styled.div`
    width:100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Tasktitle = styled.div`
    width: 100%;
    margin: 0px;
    margin-left: 140px;
`;


const Title = styled.p`
    font-size: 25px;
    text-align: left;
    margin: 0px;
    margin-bottom: 20px;
`;


const Tips = styled.div`
    width: 100%;
    height: 35%;
    justify-content:center;
    display: flex;
    align-items: center;
`;

const Task = styled.div`
    width: 200px;
    height: 300px;
    margin-right: 20px;
    border-radius: 15px;
    background-color: #6267D0;
    text-align: center;
    padding: 20px;
    
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;

`;


const Arrow = styled.img`
    width: 30px;
    margin: 0px 30px;
`;

const Taskname = styled.p`
    color: white;
`;

const Tasklogo = styled.img`
   height:100px;
   margin:30px 0px;
`;

const Content = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

// const Tips = styled.div`
//     width:100%;
//     height: 90%;
//     height:90%;
//     background-color: #5D609F;
//     margin-right: 40px;
//     border-radius: 15px;
//     display: flex;
//     align-items:center;
//     justify-content:center;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//
// `;

// const Tasks = styled.div`
//     width: 80%;
//     height: 100%;
//     display: flex;
//     align-items:center;
//     justify-content: left
// `;

// const Title = styled.p`
//     position: relative;
//     right: 37%;
//     font-size: 20px;
//     margin: 0px;
// `;

const Tiptitle = styled.p`
    font-size: 20px;
    text-align: center;
    
`;

const Notifications = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: left
`;

// const Content = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;

const Tip = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 20px;
    border-radius: 15px;
    text-align: center;
    padding: 20px;
`;

const Tipname = styled.p`
    color: black;
`;


function Home(props) {
    return (
        <StyledContainer main>
            <Homecontainer grey>
                <Tasktitle>
                    <Title>Tasks</Title>
                </Tasktitle>
                <Tasks>
                    <Arrow src={arrowLeft}/>
                    <Content>
                        <Task>
                            <Taskname>Introduction</Taskname>
                            <Tasklogo src={introduction} />
                            <Taskname>5 mins</Taskname>
                        </Task>
                        <Task>
                            <Taskname>Introduction</Taskname>
                            <Tasklogo src={question} />
                            <Taskname>8 mins</Taskname>
                        </Task>
                        <Task>
                            <Taskname>Introduction</Taskname>
                            <Tasklogo src={question} />
                            <Taskname>8 mins</Taskname>
                        </Task>
                    </Content>
                    <Arrow src={arrowRight}/>
                </Tasks>
            </Homecontainer>
            <Tipscontainer>
                <Title>Notifications</Title>
                <Tips>
                    <Arrow src={arrowLeft}/>
                    <Content>
                        <Tip>
                            <Tipname>Daily Tip</Tipname>
                            <Tipname>If you're having trouble, try to talk to someone you trust about how you feel</Tipname>
                        </Tip>
                        <Tip>
                            <Tipname>Janice's Feedback</Tipname>
                            <Tipname>Don't forget to take a break to clear your mind with some deep breaths when you're feeling stressed.</Tipname>
                        </Tip>
                        <Tip>
                            <Tipname>Upcoming Appointment</Tipname>
                            <Tipname>Don't forget your appointment with Janice today at 6:30PM</Tipname>
                        </Tip>
                    </Content>
                    <Arrow src={arrowRight}/>
                </Tips>

            </Tipscontainer>

        </StyledContainer> )}

export default Home;