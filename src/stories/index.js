import React from 'react';

import { storiesOf } from '@storybook/react';

// Demo Stuff
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

// Real thing
import { stackedAreaData, legendData } from '../helpers/testData';
import StackedAreaComponent from '../charts/stackedArea/StackedAreaComponent';
import LegendComponent from '../charts/legend/LegendComponent';

// from NPM modules
import 'britecharts/dist/css/britecharts.css';

storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
    .add('with some test stuff', () => <Button>Testing baby</Button>);

storiesOf('StackedArea', module)
    .add('with 3 sources data', () => <StackedAreaComponent data={stackedAreaData.with3Sources()} />)
    .add('with 500px width and 200px height', () => <StackedAreaComponent data={stackedAreaData.with3Sources()} width={500} height={200} />);

storiesOf('Legend', module)
    .add('with 500x500 container', () => (
        <LegendComponent
            data={legendData}
            height={500}
            width={500}
        />
    ))
    .add('with vertical orientation and smaller dots', () => (
        <LegendComponent
            data={legendData}
            isHorizontal={true}
            markerSize={5}
        />
    ));
