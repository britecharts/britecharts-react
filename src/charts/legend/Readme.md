### with a square container
```js
    const legendData = require('./legendChart.fixtures.js').default;

    <LegendComponent
        data={legendData.with6Points()}
        height={500}
        width={500}
    />
```

### with vertical orientation and smaller dots
```js
    const legendData = require('./legendChart.fixtures.js').default;

    <LegendComponent
        data={legendData.with6Points()}
        isHorizontal={true}
        markerSize={5}
    />
```
