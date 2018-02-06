### With default properties
```js
    const groupedBarData = require('./groupedBarChart.fixtures.js').default;

    <GroupedBar
        data={groupedBarData.with3Groups()}
    />
```

### Horizontal, with fixed width and height
```js
    const groupedBarData = require('./groupedBarChart.fixtures.js').default;

    <GroupedBar
        data={groupedBarData.with3Groups()}
        isHorizontal={true}
        width={500}
        height={200}
    />
```

### With loading state
```js

    <GroupedBar
        data={null}
        shouldShowLoadingState={true}
    />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Grouped-bar.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#GroupedBarChartData__anchor