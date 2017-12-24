### one line with responsive
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


    <ResponsiveLineChart
        data={lineData.oneSet()}
        margin={margin}
    />
```

### multiple lines with responsive
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

    <ResponsiveLineChart
        data={lineData.fiveTopics()}
        margin={margin}
    />
```

### multiple lines with tooltip and responsive
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
        <ResponsiveLineChart
            data={lineData.fiveTopics()}
            margin={margin}
            {...props}
        />
    );

    <TooltipComponent
        data={lineData.fiveTopics()}
        render={renderLineComponent}
    />
```
