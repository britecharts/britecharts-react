### with 3 sources data
```js
    const stackedAreaData = require('../../helpers/testData.js').stackedAreaData;

    <StackedAreaComponent
        data={stackedAreaData.with3Sources()}
    />
```


### with 500px width and 200px height
```js
    const stackedAreaData = require('../../helpers/testData.js').stackedAreaData;

    <StackedAreaComponent
        data={stackedAreaData.with3Sources()}
        width={500}
        height={200}
    />
```


### with 2 sources data
```js
    const stackedAreaData = require('../../helpers/testData.js').stackedAreaData;

    <StackedAreaComponent
        data={stackedAreaData.with2Sources()}
    />
```


### with 2 sources data and hover event
```js
    const stackedAreaData = require('../../helpers/testData.js').stackedAreaData;
    const logMouseOver = () => console.log('Mouse Over');
    const logMouseOut = () => console.log('Mouse Out');
    const logMouseMoveTooltip = (dataPoint, topicColorMap, dataPointXPosition) => {
        console.log('Mouse Move: dataPoint', dataPoint);
        console.log('Mouse Move: topicColorMap', topicColorMap);
        console.log('Mouse Move: dataPointXPosition', dataPointXPosition);
    };

    <StackedAreaComponent
        data={stackedAreaData.with2Sources()}
        customMouseOver={logMouseOver}
        customMouseMove={logMouseMoveTooltip}
        customMouseOut={logMouseOut}
    />
```


### with 2 sources data and Tooltip
```js
    const stackedAreaData = require('../../helpers/testData.js').stackedAreaData;
    const renderStackedAreaComponent = (props) => (
        <StackedAreaComponent
            data={stackedAreaData.with2Sources()}
            {...props}
        />
    );

    <TooltipComponent
        data={stackedAreaData.with2Sources()}
        render={renderStackedAreaComponent}
    />
```
