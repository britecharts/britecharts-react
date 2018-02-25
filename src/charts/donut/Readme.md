### With default properties
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveDonut = withResponsiveness(Donut);


  <ResponsiveDonut data={donutData.with4Slices()} />
```

### With hover event
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const logMouseOver = () => console.log('Mouse Over');

  <Donut
    data={donutData.with4Slices()}
    customMouseOver={logMouseOver}
    externalRadius={100}
    internalRadius={47}
    highlightSliceById={1}
  />
```


### With loading state
```js

    <Donut
        data={[]}
        shouldShowLoadingState={true}
    />
```

### With highlighted Legend and fully responsive
```js
  const donutData = require('./donutChart.fixtures.js').default;
  const withResponsiveness = require('../helpers/withResponsiveness.js').default;
  const ResponsiveContainer = require('../helpers/responsiveContainer.js').default;
  const ResponsiveDonut = withResponsiveness(Donut);
  const ResponsiveLegend = withResponsiveness(Legend);

  class LegendDonut extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {highlightedSlice: null};
    }

    _handleMouseOver(data) {
      this.setState({
        highlightedSlice: data.data.id
      });
    }

    _handleMouseOut() {
      this.setState({
        highlightedSlice: 99999
      });
    }

    render() {
      const legendMargin = {
        top: 10,
        bottom: 10,
        left: 0,
        right: 30,
      };

      return (
          <ResponsiveContainer
            render={
              ({width}) =>
                <div>
                  <Donut
                    data={donutData.with4Slices()}
                    height={width}
                    width={width}
                    externalRadius={width / 2.5}
                    internalRadius={width / 5}
                    isAnimated={false}
                    highlightSliceById={this.state.highlightedSlice}
                    customMouseOver={this._handleMouseOver.bind(this)}
                    customMouseOut={this._handleMouseOut.bind(this)}
                  />
                  <Legend
                    data={donutData.with4Slices()}
                    height={200}
                    width={width}
                    margin={legendMargin}
                    highlightEntryById={this.state.highlightedSlice}
                  />
                </div>
              }

          />
      );
    }
  }

  <LegendDonut />
```

See more:
* [API description][APILink]
* [Data definition][DataLink]



[APILink]: http://eventbrite.github.io/britecharts/module-Donut.html
[DataLink]: http://eventbrite.github.io/britecharts/global.html#DonutChartData__anchor