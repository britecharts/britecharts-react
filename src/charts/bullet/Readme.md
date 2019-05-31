### With default properties and responsive
```js
    const chartData = require('./bulletChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveBullet = withResponsiveness(Bullet);

    <ResponsiveBullet
        data={chartData.fullTestData()}
    />
```

### With loading state
```js

    <Bullet
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Bullet.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#BulletChartData
