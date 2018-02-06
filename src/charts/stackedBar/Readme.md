### With default properties
```js
    const stackedBarData = require('./stackedBarChart.fixtures.js').default;

    <StackedBar
        data={stackedBarData.with3Sources()}
    />
```

### With horizontal and fixed width and height
```js
    const stackedBarData = require('./stackedBarChart.fixtures.js').default;

    <StackedBar
        data={stackedBarData.with3Sources()}
        isHorizontal={true}
        width={600}
        height={400}
    />
```

### With loading state
```js
    <StackedBar
        data={null}
        shouldShowLoadingState={true}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Stacked-bar.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#stackedBarData__anchor