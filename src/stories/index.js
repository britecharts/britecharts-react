import React from 'react';

import { storiesOf } from '@storybook/react';

// Demo Stuff
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

// Real thing
import StackedAreaComponent from '../charts/stackedArea/StackedAreaComponent';
import LineComponent from '../charts/line/LineComponent';
import TooltipComponent from '../charts/tooltip/TooltipComponent';

// from NPM modules
import 'britecharts/dist/css/britecharts.css';

const stackedAreaData = require('../charts/stackedArea/stackedAreaChart.fixtures').default;
const lineData = require('../charts/line/lineChart.fixtures').default;

const withResponsiveness = require('../charts/helpers/withResponsiveness').default;


// Stacked Area
const ResponsiveStackedArea = withResponsiveness(StackedAreaComponent);
const renderResponsiveStackedAreaComponent = (props) => (
    <ResponsiveStackedArea
        data={stackedAreaData.with2Sources()}
        {...props}
    />
);

storiesOf('Stacked Area', module)
    .add('with 3 sources data', () => (
        <StackedAreaComponent
            data={stackedAreaData.with2Sources()}
            tooltipThreshold={3000}
        />
    ))
    .add('with 3 sources data and responsive', () => (
        <TooltipComponent
            data={stackedAreaData.with2Sources()}
            render={renderResponsiveStackedAreaComponent}
        />
    ));


// Line
const renderLineComponent = (props) => (
    <LineComponent
        data={lineData.smallValueRange()}
        {...props}
    />
);

const ResponsiveLineChart = withResponsiveness(LineComponent);
const renderResponsiveLineComponent = (props) => (
    <ResponsiveLineChart
        data={lineData.smallValueRange()}
        {...props}
    />
);

storiesOf('Line Chart', module)
    .add('with 1 source data', () => (
        <TooltipComponent
            topicLabel="topics"
            data={lineData.smallValueRange()}
            render={renderLineComponent}
        />
    ))
    .add('with 1 source data and responsive', () => (
        <TooltipComponent
            topicLabel="topics"
            data={lineData.smallValueRange()}
            render={renderResponsiveLineComponent}
        />
    ));




