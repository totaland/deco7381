import React from 'react';
import styled from 'styled-components'
import {MyResponsiveStream} from "./Chart";
import DisplayButton from "./DisplayButton";
import {Container, Button, Input, Search, StyledField, StyledForm, H3} from "./Common";


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



export function ChartView(){
        return (
            <Container main>

                <Container grey>
                    <DisplayButton>Mood</DisplayButton>
                    <DisplayButton>Energy</DisplayButton>
                    <DisplayButton>Engagement</DisplayButton>

                </Container>


                <StyledContainer blue>

                    <Chart>
                        <MyResponsiveStream/>
                    </Chart>
                    <Result>
                        <Resulttext>Your Current Mood Score is 87 </Resulttext>
                        <Resulttext>Your score is very high. This means that you're currently in a really good mood. But that doesn't mean you can now just stop with the exercises. Keep up the good work to maintain it! </Resulttext>
                    </Result>

                </StyledContainer>

            </Container>
        );

}



