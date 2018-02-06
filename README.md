# Britecharts React
> Britecharts-react is a [React][react] wrapper for the [Britecharts][britecharts] charting library.

[![Build Status](https://travis-ci.org/eventbrite/britecharts-react.svg?branch=master)](https://travis-ci.org/eventbrite/britecharts-react)
[![npm version](https://badge.fury.io/js/britecharts-react.svg)](https://badge.fury.io/js/britecharts-react)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/eventbrite/britecharts-react/blob/master/CONTRIBUTING.md)
[![Twitter Follow](https://img.shields.io/twitter/follow/britecharts-react.svg?style=social&label=Follow)](https://twitter.com/Britecharts/followers)


| [![Stacked Area Chart][stackedAreaImg]][stackedAreaDemo] | [![Bar Chart][barChartImg]][barChartDemo] | [![Line Chart][lineChartImg]][lineChartDemo] |
| ------------- | ------------- | ------------- |
| [![Donut Chart][donutChartImg]][donutChartDemo] | [![Legend][legendImg]][legendDemo] | [![Tooltip][tooltipImg]][tooltipDemo] |

## Usage
Import components from Britecharts-React:

```js static
//ES6 import syntax
import { StackedArea } from 'britecharts-react';

//CommonJS require syntax
const { StackedArea } = require('britecharts-react');
```

Britecharts-React components are used just like any other stateless React component. You will pass in some props and it would render a chart:

```js static
<StackedArea
    data={stackedAreaData.with2Sources()}
    width={600}
    height={400}
/>

```

## API
Each component's API will be a reflect of [Britecharts][britecharts] charts and their APIs. That way, if we need to render a bar chart, we will first check the [bar chart's API][barChartAPI] in the main project API reference page. You can read more about the approach [here][topics]

From there, we will proceed to pass each of the configurations through the usual props as we do in React projects:
```js static
<Bar
    data={barData.with2Entries()}
    width={400}
    isHorizontal={true}
    margin={marginObject}
>
```

The complete set of components is in progress; the following components are currently implemented and available for use:
- Bar charts [(API)][barChartAPI]
- Grouped Bar charts [(API)][groupedBarChartAPI]
- Donut charts [(API)][donutChartAPI]
- Line charts [(API)][lineChartAPI]
- Stacked Area charts [(API)][stackedAreaChartAPI]
- Tooltips [(API)][tooltipAPI]
- Loading states

The following components are not yet implemented:
- Brush charts
- Stacked Bar charts
- Sparkline charts
- Step charts

## Installation
Britecharts-React is available as an [NPM module][npmModule] or through CDN links (in [different formats][jsDelivrLib] or a [bundle][jsDelivrDist]).

You can also use individual bundles in UMD format (`dist/umd/`), CommonJS format (`lib/cjs`) and tree-shaking enabling ES2015 modules (`lib/esm`) to add to your bundle. You can see more on our [test project][testProject].

You would also need to load the stylesheets located in `dist/britecharts-react.min.css` in order to style the charts properly.

## Next steps
We are accepting PRs for creating wrappers for Britecharts components. Check our [contributing guide][contributingGuide], drop by the #britecharts channel in the [d3 slack][d3Slack] or just create an issue if you want to know more.


## Acknowledgments
For this project, we have followed the approach called ‘Mapping Lifecycle methods’ based on [Nicholas Hery's article][integration-article]. We want to recognize all the contributors in the parent project [Britecharts][britecharts].


## See Also
- [Documentation Homepage][homepage]
- [Contributing Guide][contributingGuide]
- [Code of Conduct][codeOfConduct]

## License
Copyright 2017 Eventbrite

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[https://www.apache.org/licenses/LICENSE-2.0][license]

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Read more in the [license document][licenseGithub]

[britecharts]: https://github.com/eventbrite/britecharts
[react]: https://facebook.github.io/react/
[integration-article]: http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/
[barChartAPI]: http://eventbrite.github.io/britecharts/module-Bar.html
[groupedBarChartAPI]: http://eventbrite.github.io/britecharts/module-Grouped-Bar.html
[donutChartAPI]: http://eventbrite.github.io/britecharts/module-Donut.html
[lineChartAPI]: http://eventbrite.github.io/britecharts/module-Line.html
[stackedAreaChartAPI]: http://eventbrite.github.io/britecharts/module-Stacked-area.html
[tooltipAPI]: http://eventbrite.github.io/britecharts/module-Tooltip.html
[license]: https://www.apache.org/licenses/LICENSE-2.0
[licenseGithub]: https://github.com/eventbrite/britecharts-react/blob/master/LICENSE.md
[topics]: https://github.com/eventbrite/britecharts-react/blob/master/TOPICS.md
[jsDelivrLib]: https://cdn.jsdelivr.net/npm/britecharts-react@latest/lib/
[jsDelivrDist]: https://cdn.jsdelivr.net/npm/britecharts-react@latest/dist/
[npmModule]: https://www.npmjs.com/package/britecharts-react
[contributingGuide]: https://github.com/eventbrite/britecharts-react/blob/master/CONTRIBUTING.md
[d3Slack]: https://d3js.slack.com/
[codeOfConduct]: https://github.com/eventbrite/britecharts-react/blob/master/CODE_OF_CONDUCT.md
[homepage]: https://eventbrite.github.io/britecharts-react/
[testProject]: https://github.com/Golodhros/britecharts-react-test-project

[stackedAreaDemo]: https://eventbrite.github.io/britecharts-react/#stackedarea "Check the Demo"
[stackedAreaImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/stacked-area.png

[barChartDemo]: https://eventbrite.github.io/britecharts-react/#bar "Check the Demo"
[barChartImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/bar-chart.png

[donutChartDemo]: https://eventbrite.github.io/britecharts-react/#donut "Check the Demo"
[donutChartImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/donut-chart.png

[lineChartDemo]: https://eventbrite.github.io/britecharts-react/#line "Check the Demo"
[lineChartImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/line-chart.png

[legendDemo]: https://eventbrite.github.io/britecharts-react/#legend "Check the Demo"
[legendImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/legend.png

[tooltipDemo]: https://eventbrite.github.io/britecharts-react/#tooltip "Check the Demo"
[tooltipImg]: https://raw.githubusercontent.com/eventbrite/britecharts-react/master/src/docs/images/thumbnails/tooltip.png

