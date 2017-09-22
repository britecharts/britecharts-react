import {stackedAreaChart} from 'britecharts';
import {select} from 'd3-selection';

const stackedArea = {};

stackedArea.create = (el, {data}) => {
    let container = select(el);
    let chart = stackedAreaChart();

    console.log('container', container);

    container.datum(data).call(chart);
};

export default stackedArea;
