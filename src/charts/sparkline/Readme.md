### With default properties
```js
    const chartData = require('./sparklineChart.fixtures.js').default;
    
    <Sparkline
        data={chartData.firstDataMethod()}
        shouldShowLoadingState={true}
    />
```

### With loading state
```js

    <Sparkline
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: YourLinkToComponentAPIHere
[DataLink]: YourLinkToExampleDataInputHere