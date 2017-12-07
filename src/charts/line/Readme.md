### one line with responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);


    <ResponsiveLineChart data={lineData.oneSet()} />
```

### multiple lines with responsive
```js
    const lineData = require('./lineChart.fixtures').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLineChart = withResponsiveness(LineComponent);


    <ResponsiveLineChart data={lineData.fiveTopics()} />
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
        data={lineData.fiveTopics()}
        render={renderLineComponent}
    />
```
