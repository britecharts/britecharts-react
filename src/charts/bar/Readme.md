### vertical with responsive
```js
    const barData = require('./barChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBarChart = withResponsiveness(BarComponent);


    <ResponsiveBarChart data={barData.withLetters()} />
```

### vertical with responsive and percentage
```js
    const barData = require('./barChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBarChart = withResponsiveness(BarComponent);


    <ResponsiveBarChart
        data={barData.withLetters()}
        hasPercentage
    />
```

### horizontal with responsive and custom color schema
```js
    const colors = require('britecharts/dist/umd/colors.min');
    const barData = require('./barChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBarChart = withResponsiveness(BarComponent);


    <ResponsiveBarChart
        data={barData.withColors()}
        isHorizontal
        colorSchema={colors.colorSchemas.britecharts}
        margin={{
            left: 100,
            right: 20,
            top: 20,
            bottom: 20
        }}
    />
```
