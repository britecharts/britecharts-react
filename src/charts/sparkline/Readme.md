### With animation and responsive
```js
    const sparklineData = require('./sparklineChart.fixtures.js').default;
    const withResponsiveness = require('../helpers/withResponsiveness.js').default;
    const ResponsiveSparkline = withResponsiveness(Sparkline);
    
    <ResponsiveSparkline
        data={sparklineData.with1Source()}
        isAnimated={true}
        duration={1000}
        height={300}
    />
```

### With fixed width and title
```js
    const sparklineData = require('./sparklineChart.fixtures.js').default;

    <Sparkline
        data={sparklineData.withLowValues()}
        height={300}
        width={600}
        titleText="Yearly prediction"
    />
```


See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Sparkline.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#SparklineChartData__anchor