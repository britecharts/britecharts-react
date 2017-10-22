# Britecharts React
Britecharts-react is a [React][react] wrapper for the [Britecharts][britecharts] charting library.


## Usage
Britecharts-React components are used just like any other stateless React component. You will pass in some props and it would render a chart:

```
<StackedAreaComponent
    data={stackedAreaData.with2Sources()}
    width={600}
    height={400}
/>

```

## API
Each component's API will be a reflect of [Britecharts][britecharts] charts and their APIs. That way, if we need to render a bar chart, we will first check the [bar chart's API][barChartAPI] in the main project API reference page. You can read more about the approach [here][topics]

From there, we will proceed to pass each of the configurations through the usual props as we do in React projects:
```
    <BarComponent
        data={...}
        width={400}
        isHorizontal={true}
        margin={marginObject}
    >

```

## Installation
Britecharts-React will be available as an NPM module or through CDN links.

You can use either minified individual UMD modules(lib/umd), a minified UMD bundle(dist/) or un-minified and un-transpiled ES2015 modules(lib/esm) to add to your bundle.


## Next steps
From a broad point of view, we need to:

0. Iterate over our initial charts
0. Create the rest of wrappers for Britecharts components
0. Keep it up to date


## Acknowledgments
For this project, we have followed the approach called ‘Mapping Lifecycle methods’ based on [Nicholas Hery's article][integration-article].


## License
Copyright 2017 Eventbrite

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[https://www.apache.org/licenses/LICENSE-2.0][license]

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Read more in the [license document][licenseGithub]

[britecharts]: https://github.com/eventbrite/britecharts
[react]: https://facebook.github.io/react/
[integration-article]: http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/
[barChartAPI]: http://eventbrite.github.io/britecharts/module-Bar.html
[license]: https://www.apache.org/licenses/LICENSE-2.0
[licenseGithub]: https://github.com/eventbrite/britecharts-react/blob/master/LICENSE.md
[topics]: https://github.com/eventbrite/britecharts-react/blob/master/TOPICS.md
