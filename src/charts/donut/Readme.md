### with default properties
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveDonut = withResponsiveness(DonutComponent);


  <ResponsiveDonut data={donutData.with4Slices()} />
```

### with custom size
```js
  const donutData = require('./donutChart.fixtures.js').default;

  <DonutComponent
    data={donutData.with4Slices()}
    width={500}
    height={500}
    externalRadius={500 / 2.5}
    internalRadius={500 / 5}
  />
```

### with hover event
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const logMouseOver = () => console.log('Mouse Over');

  <DonutComponent
    data={donutData.with4Slices()}
    customMouseOver={logMouseOver}
  />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Donut.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor