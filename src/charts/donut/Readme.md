### With default properties
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveDonut = withResponsiveness(Donut);


  <ResponsiveDonut data={donutData.with4Slices()} />
```

### With custom size
```js
  const donutData = require('./donutChart.fixtures.js').default;

  <Donut
    data={donutData.with4Slices()}
    width={500}
    height={500}
    externalRadius={500 / 2.5}
    internalRadius={500 / 5}
  />
```

### With hover event and responsive
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const logMouseOver = () => console.log('Mouse Over');
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveDonut = withResponsiveness(Donut);


  <ResponsiveDonut
    data={donutData.with4Slices()}
    customMouseOver={logMouseOver}
    externalRadius={100}
    internalRadius={47}
  />
```


### With loading state
```js

    <Donut
        data={null}
        shouldShowLoadingState={true}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Donut.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor