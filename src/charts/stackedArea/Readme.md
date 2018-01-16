### With tooltip and responsive
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStackedArea = withResponsiveness(StackedArea);

    const renderStackedArea = (props) => (
        <ResponsiveStackedArea
            data={stackedAreaData.with3Sources()}
            {...props}
        />
    );

    <Tooltip
        data={stackedAreaData.with3Sources()}
        render={renderStackedArea}
    />
```

### With fixed width and height
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;

    <StackedArea
        data={stackedAreaData.with3Sources()}
        width={500}
        height={200}
    />
```


### With mouse events (on console)
```js
    const stackedAreaData = require('./stackedAreaChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStackedArea = withResponsiveness(StackedArea);

    const logMouseOver = () => console.log('Mouse Over');
    const logMouseOut = () => console.log('Mouse Out');
    const logMouseMoveTooltip = (dataPoint, topicColorMap, dataPointXPosition) => {
        console.log('Mouse Move: dataPoint', dataPoint);
        console.log('Mouse Move: topicColorMap', topicColorMap);
        console.log('Mouse Move: dataPointXPosition', dataPointXPosition);
    };

    <ResponsiveStackedArea
        data={stackedAreaData.with3Sources()}
        customMouseOver={logMouseOver}
        customMouseMove={logMouseMoveTooltip}
        customMouseOut={logMouseOut}
    />
```

### With loading state
```js

    <StackedArea
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Stacked-area.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#areaChartData__anchor
