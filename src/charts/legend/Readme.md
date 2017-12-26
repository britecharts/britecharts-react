### with default vertical layout and fixed width
```js
    const legendData = require('./legendChart.fixtures.js').default;

    <LegendComponent
        data={legendData.with6Points()}
        height={250}
        width={400}
    />
```

### with horizontal orientation and responsive
```js
    const legendData = require('./legendChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveLegend = withResponsiveness(LegendComponent);

    <ResponsiveLegend
        data={legendData.with6Points()}
        isHorizontal={true}
        marginRatio={1.8}
        height={100}
    />
```

### with horizontal orientation, smaller dots and fixed width
```js
    const legendData = require('./legendChart.fixtures.js').default;

    <LegendComponent
        data={legendData.with6Points()}
        isHorizontal={true}
        markerSize={10}
        marginRatio={1.8}
        width={500}
        height={100}
    />
```
