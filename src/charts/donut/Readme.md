### with default styles
```js
  const donutData = require('../../helpers/testData.js').donutData;

  <DonutComponent data={donutData()} />
```

### with custom size
```js
  const donutData = require('../../helpers/testData.js').donutData;

  <DonutComponent
    data={donutData()}
    width={500}
    height={500}
    externalRadius={500 / 2.5}
    internalRadius={500 / 5}
  />
```

### with hover event
```js
  const donutData = require('../../helpers/testData.js').donutData;
  const logMouseOver = () => console.log('Mouse Over');

  <DonutComponent
    data={donutData()}
    customMouseOver={logMouseOver}
  />
```
