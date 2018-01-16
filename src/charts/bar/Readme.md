### Vertical with responsive
```js
    const barData = require('./barChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBarChart = withResponsiveness(Bar);


    <ResponsiveBarChart
        data={barData.withLetters()}
    />
```

### Horizontal with responsive and custom color schema
```js
    const colors = require('britecharts/dist/umd/colors.min');
    const barData = require('./barChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBarChart = withResponsiveness(Bar);


    <ResponsiveBarChart
        data={barData.withColors()}
        isHorizontal={true}
        height={400}
        betweenBarsPadding={0.3}
        colorSchema={colors.colorSchemas.orange}
        margin={{
            left: 100,
            right: 40,
            top: 40,
            bottom: 40
        }}
    />
```

### With loading state
```js

    <Bar
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Bar.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#BarChartData__anchor