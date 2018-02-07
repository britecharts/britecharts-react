### With default properties
```js
    const chartData = require('./{{lowerFirst chartName}}Chart.fixtures.js').default;
    
    <{{componentName}}
        data={chartData.firstDataMethod()}
        shouldShowLoadingState={true}
    />
```

### With loading state
```js

    <{{componentName}}
        data={null}
        shouldShowLoadingState={true}
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: YourLinkToComponentAPIHere
[DataLink]: YourLinkToExampleDataInputHere