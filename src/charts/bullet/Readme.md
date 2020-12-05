### With default properties and responsive

```js
const chartData = require('./bulletChart.fixtures.js').default;
const withResponsiveness = require('../helpers/withResponsiveness.js')
    .default;
const ResponsiveBullet = withResponsiveness(Bullet);

<ResponsiveBullet data={chartData.fullTestData()} />;
```

### With measure under ranges

```js
const chartData = require('./bulletChart.fixtures.js').default;
const withResponsiveness = require('../helpers/withResponsiveness.js')
    .default;
const ResponsiveBullet = withResponsiveness(Bullet);

<ResponsiveBullet data={chartData.underRangeNoMarker()} />;
```

### With loading state

```js
<Bullet data={null} shouldShowLoadingState={true} />
```

See more:

-   [API description][apilink]
-   [Data definition][datalink]

[apilink]: http://britecharts.github.io/britecharts/module-Bullet.html
[datalink]: http://britecharts.github.io/britecharts/global.html#BulletChartData
