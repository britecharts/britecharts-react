### one line with responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);


    <ResponsiveLineChart
        topicLabel="topics"
        data={lineData.oneSet()}
    />
```

### multiple lines with responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);


    <ResponsiveLineChart
        topicLabel="topics"
        data={lineData.fiveTopics()}
    />
```

### multiple lines with tooltip and responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);
    const renderLineComponent = (props) => (
        <ResponsiveLineChart
            data={lineData.fiveTopics()}
            {...props}
        />
    );

    <TooltipComponent
        topicLabel="topics"
        data={lineData.fiveTopics()}
        render={renderLineComponent}
    />
```

### single line with tooltip and responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);

    const renderLineComponent = (props) => (
        <ResponsiveLineChart
            data={lineData.smallValueRange()}
            {...props}
        />
    );

    <TooltipComponent
        topicLabel="topics"
        data={lineData.smallValueRange()}
        render={renderLineComponent}
    />
```
