import React from 'react';

import { storiesOf } from '@storybook/react';

// Demo Stuff
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

// Real thing
import { stackedAreaData } from '../helpers/testData';
import StackedAreaComponent from '../charts/stackedArea/StackedAreaComponent';

// from NPM modules
import 'britecharts/dist/css/britecharts.css';

storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
    .add('with some test stuff', () => <Button>Testing baby</Button>);

storiesOf('StackedArea', module)
    .add('with 3 sources data', () => <StackedAreaComponent data={stackedAreaData.with3Sources()} />);
