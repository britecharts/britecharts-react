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

### With default properties and tooltip
```js
    const stackedBarData = require('./stackedBarChart.fixtures.js').default;
    const ResponsiveContainer = require('../helpers/responsiveContainer.js').default;
    const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 70,
    };

    const renderStackedBar = (props) => (
        <ResponsiveContainer
            render={
                ({width}) =>
                    <StackedBar
                        margin={margin}
                        width={width}
                        {...props}
                    />
            }
        />
    );

    <Tooltip
        data={stackedBarData.with3SourcesAndDates()}
        render={renderStackedBar}
        title="Tooltip Title"
        dateLabel="key"
        nameLabel="stack"
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