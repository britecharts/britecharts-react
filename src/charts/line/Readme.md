### one line with tooltip and basis curve
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    const renderLineComponent = (props) => (
        <LineComponent
            margin={margin}
            lineCurve="basis"
            {...props}
        />
    );

    <TooltipComponent
        data={lineData.oneSet()}
        render={renderLineComponent}
        topicLabel="topics"
        title="Tooltip Title"
    />
```

### multiple lines with tooltip
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    const renderLineComponent = (props) => (
        <LineComponent
            margin={margin}
            {...props}
        />
    );

    <TooltipComponent
        data={lineData.fiveTopics()}
        render={renderLineComponent}
        topicLabel="topics"
        title="Demo Title"
    />
```

### multiple lines with stepBefore curve and teal colorSchema
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);
    const colors = require('../helpers/colors.js');
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    <LineComponent
        data={lineData.fiveTopics()}
        margin={margin}
        lineCurve="stepBefore"
        tooltipThreshold={2000}
        colorSchema={colors.colorSchemas.teal}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Line.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#LineChartData__anchor