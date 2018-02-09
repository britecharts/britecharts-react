### With default properties
```js
    const chartData = require('./stepChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveStepChart = withResponsiveness(Step);
    
    <ResponsiveStepChart
        data={chartData.firstDataMethod()}
        shouldShowLoadingState={false}
    />
```

### With loading state
```js

    <Step
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Step.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#stackedBarData__anchor