### With one line with tooltip and basis curve
```js
    const lineData = require('./lineChart.fixtures').default;
    const ResponsiveContainer = require('../helpers/responsiveContainer.js').default;
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    const renderLine = (props) => (
        <ResponsiveContainer
            render={
                ({width}) =>
                    <Line
                        margin={margin}
                        lineCurve="basis"
                        width={width}
                        {...props}
                    />
            }
        />
    );

    <Tooltip
        data={lineData.oneSet()}
        render={renderLine}
        topicLabel="topics"
        title="Tooltip Title"
    />
```

### With multiple lines with tooltip
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(Line);
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    const renderLine = (props) => (
        <ResponsiveLineChart
            tooltipThreshold={0}
            margin={margin}
            {...props}
        />
    );

    <Tooltip
        data={lineData.fiveTopics()}
        render={renderLine}
        topicLabel="topics"
        title=""
    />
```

### With multiple lines with stepBefore curve and teal colorSchema
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(Line);
    const colors = require('../helpers/colors.js');
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    <ResponsiveLineChart
        data={lineData.fiveTopics()}
        margin={margin}
        lineCurve="stepBefore"
        tooltipThreshold={2000}
        colorSchema={colors.colorSchemas.teal}
    />
```

### With loading state
```js

    <Line
        data={null}
        shouldShowLoadingState={true}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Line.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#LineChartData__anchor
