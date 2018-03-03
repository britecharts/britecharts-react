### With default properties
```js
    const chartData = require('./sparklineChart.fixtures.js').default;
    
    <Sparkline
        data={chartData.withLowValues()}
    />
```

### With loading state
```js

    <Sparkline
        height={400}
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: YourLinkToComponentAPIHere
[DataLink]: YourLinkToExampleDataInputHere