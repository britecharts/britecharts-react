### with 2 sources data, Tooltip and responsive
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStackedArea = withResponsiveness(StackedAreaComponent);
    const renderStackedAreaComponent = (props) => (
        <ResponsiveStackedArea
            data={stackedAreaData.with2Sources()}
            {...props}
        />
    );

    <TooltipComponent
        data={stackedAreaData.with2Sources()}
        render={renderStackedAreaComponent}
    />
```

### with 3 sources data
```js

    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStackedArea = withResponsiveness(StackedAreaComponent);

    <ResponsiveStackedArea
        data={stackedAreaData.with3Sources()}
    />
```


### with 500px width and 200px height
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;

    <StackedAreaComponent
        data={stackedAreaData.with3Sources()}
        width={500}
        height={200}
    />
```


### with 2 sources data and hover events (on console)
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStackedArea = withResponsiveness(StackedAreaComponent);

    const logMouseOver = () => console.log('Mouse Over');
    const logMouseOut = () => console.log('Mouse Out');
    const logMouseMoveTooltip = (dataPoint, topicColorMap, dataPointXPosition) => {
        console.log('Mouse Move: dataPoint', dataPoint);
        console.log('Mouse Move: topicColorMap', topicColorMap);
        console.log('Mouse Move: dataPointXPosition', dataPointXPosition);
    };

    <ResponsiveStackedArea
        data={stackedAreaData.with2Sources()}
        customMouseOver={logMouseOver}
        customMouseMove={logMouseMoveTooltip}
        customMouseOut={logMouseOut}
    />
```
