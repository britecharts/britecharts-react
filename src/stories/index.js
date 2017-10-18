import React from 'react';

import { storiesOf } from '@storybook/react';

import { stackedAreaData, legendData } from '../helpers/testData';
import StackedAreaComponent from '../charts/stackedArea/StackedAreaComponent';
import LegendComponent from '../charts/legend/LegendComponent';
import TooltipComponent from '../charts/tooltip/TooltipComponent';

// from NPM modules
import 'britecharts/dist/css/britecharts.css';


// Helpers
const logMouseOver = () => console.log('Mouse Over');
const logMouseOut = () => console.log('Mouse Out');
const logMouseMoveTooltip = (dataPoint, topicColorMap, dataPointXPosition) => {
    console.log('Mouse Move: dataPoint', dataPoint);
    console.log('Mouse Move: topicColorMap', topicColorMap);
    console.log('Mouse Move: dataPointXPosition', dataPointXPosition);
};

storiesOf('StackedArea', module)
    .add('with 3 sources data', () => <StackedAreaComponent data={stackedAreaData.with3Sources()} />)
    .add('with 500px width and 200px height', () => (
        <StackedAreaComponent
            data={stackedAreaData.with3Sources()}
            width={500}
            height={200}
        />)
    )
    .add('with 2 sources data', () => <StackedAreaComponent data={stackedAreaData.with2Sources()} />)
    .add('with 2 sources data and hover event', () => (
        <StackedAreaComponent
            data={stackedAreaData.with2Sources()}
            customMouseOver={logMouseOver}
            customMouseMove={logMouseMoveTooltip}
            customMouseOut={logMouseOut}
        />)
    );

storiesOf('Tooltip', module)
    .add('with 3 sources data', () => <TooltipComponent data={stackedAreaData.with3Sources()} />)
    .add('with 2 sources data', () => <TooltipComponent data={stackedAreaData.with2Sources()} title="Test Title" />)
    .add('with 2 sources data and stackedArea', () => (
        <TooltipComponent data={stackedAreaData.with2Sources()}>
            <StackedAreaComponent
                data={stackedAreaData.with2Sources()}
            />
        </TooltipComponent>
    ));

storiesOf('Legend', module)
    .add('with 500x500 container', () => (
        <LegendComponent
            data={legendData.with6Points()}
            height={500}
            width={500}
        />
    ))
    .add('with vertical orientation and smaller dots', () => (
        <LegendComponent
            data={legendData.with6Points()}
            isHorizontal={true}
            markerSize={5}
        />
    ));
