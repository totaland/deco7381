import { ResponsiveStream } from '@nivo/stream'
import { linearGradientDef } from '@nivo/core'
import React, {useEffect, useRef, useState} from "react";
import "./Textcolor.css"
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const theme = {
    background: "transparent",
    axis: {
        fontSize: "14px",
        tickColor: "white",
        ticks: {
            line: {
                stroke: "white"
            },
            text: {
                fill: "white"
            }
        },
        legend: {
            text: {
                fill: "white"
            }
        }
    },
    grid: {
        line: {
            stroke: "#868686"
        }
    }
};



export const MyResponsiveStream = ({data}) => {

    const [realData, setData] = useState(null);
    const dataRef = useRef(null);
    dataRef.current = realData;

    useEffect(()=> {
        const getData = async () => {
            let res = await API.graphql(graphqlOperation(queries.listFitnesss, {limit: 50}))
            console.log(res.data.listFitnesss.items);
            let arr = res.data.listFitnesss.items;
            let dataToSet =[];
            await arr.map(async (value) => {
                console.log(value);
                const dScore = value.depression;
                const aScore = value.anxiety;
                const sScore = value.stress;
                let item = {
                    "Stress": sScore,
                    "Anxiety": aScore,
                    "Depression": dScore,
                };
                dataToSet.push(item)
            })
            console.log(dataToSet);
            setData(dataToSet);
        }
        getData();
    },[])

    return (
        realData && <ResponsiveStream
            data={realData}
            theme = {theme}
            keys={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            enableGridX={false}
            enableGridY={true}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                itemTextColor: "white"
            }}
            axisLeft={{ itemTextColor: "white", orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
            borderWidth={0}
            borderColor={"#606060"}
            offsetType="diverging"
            colors={['#FFDB15','#BBE629','#9BEBD6']}
            fillOpacity={0.85}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#2c998f',
                    size: 4,
                    padding: 2,
                    stagger: true
                },
                linearGradientDef('gradientA', [
                    { offset: 0, color: '#9BEBD6' },
                    { offset: 100, color: '#9BEBD6', opacity: 0 },
                ]),
                linearGradientDef('gradientB', [
                    { offset: 0, color: '#BBE629' },
                    { offset: 100, color: '#BBE629', opacity: 0 },
                ]),
                linearGradientDef('gradientC', [
                    { offset: 0, color: '#FFDB15' },
                    { offset: 100, color: '#FFDB15', opacity: 0 },
                ]),
                {
                    id: 'squares',
                    type: 'patternSquares',
                    background: 'inherit',
                    color: '#e4c912',
                    size: 6,
                    padding: 2,
                    stagger: true
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'Stress'
                    },
                    id: 'gradientC'
                },
                {
                    match: {
                        id: 'Anxiety'
                    },
                    id: 'gradientB'
                },
                {
                    match: {
                        id: 'Depression'
                    },
                    id: 'gradientA'
                }
            ]}
            dotSize={8}
            dotColor={{ from: 'color' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: 'white',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}


