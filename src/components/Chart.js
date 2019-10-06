import { ResponsiveStream } from '@nivo/stream'
import { linearGradientDef } from '@nivo/core'
import React from "react";
import "./Textcolor.css"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const testdata = [
    {
        "Mood": 13,
        "Energy": 23,
        "Engagement": 7,
        // "René": 43,
        // "Paul": 194,
        // "Jacques": 66
    },
    {
        "Mood": 11,
        "Energy": 32,
        "Engagement": 12,
        // "René": 78,
        // "Paul": 63,
        // "Jacques": 28
    },
    {
        "Mood": 23,
        "Energy": 27,
        "Engagement": 12,
    //     "René": 69,
    //     "Paul": 187,
    //     "Jacques": 133
    },
    {
        "Mood": 2,
        "Energy": 9,
        "Engagement": 17,
    //     "René": 28,
    //     "Paul": 64,
    //     "Jacques": 32
    },
    {
        "Mood": 8,
        "Energy": 19,
        "Engagement": 27,
    //     "René": 137,
    //     "Paul": 194,
    //     "Jacques": 123
    },
    {
        "Mood": 29,
        "Energy": 22,
        "Engagement": 14,
    //     "René": 162,
    //     "Paul": 42,
    //     "Jacques": 130
    },
    {
        "Mood": 21,
        "Energy": 12,
        "Engagement": 3,
    //     "René": 137,
    //     "Paul": 111,
    //     "Jacques": 96
    },

];

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


export const MyResponsiveStream = ({ data }) => (
    <ResponsiveStream
        data={testdata}
        theme = {theme}
        keys={[ 'Mood', 'Energy', 'Engagement']}
            // 'René', 'Paul', 'Jacques' ]}
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
        colors={{ scheme: 'nivo' }}
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
                    id: 'Mood'
                },
                id: 'gradientC'
            },
            {
                match: {
                    id: 'Energy'
                },
                id: 'gradientB'
            },
            {
                match: {
                    id: 'Engagement'
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
// ACTIONS LOGS
// Start interacting with the chart to log actions