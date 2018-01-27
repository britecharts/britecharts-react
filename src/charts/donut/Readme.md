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
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveContainer = require('../helpers/responsiveContainer.js').default;
  const ResponsiveDonut = withResponsiveness(Donut);
  const ResponsiveLegend = withResponsiveness(Legend);
  let legendInstance;

  <div>
    <ResponsiveContainer
      render={
        ({width}) =>
          <Donut
            data={donutData.with4Slices()}
            height={500}
            width={width}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            customMouseOver={
              (data) => {
                legendInstance._chart.highlight(data.data.id);
              }
            }
            customMouseOut={
              () => {
                legendInstance._chart.clearHighlight();
              }
            }
          />
      }
    />
    <ResponsiveContainer
      render={
        ({width}) =>
          <Legend
            ref={(legend) => { legendInstance = legend; }}
            data={donutData.with4Slices()}
            height={300}
            width={width}
          />
      }
    />
  </div>
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
    highlightSliceById={1}
  />
```


### With loading state
```js

    <Donut
        data={[]}
        shouldShowLoadingState={true}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Donut.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor