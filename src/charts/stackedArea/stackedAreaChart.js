import {stackedAreaChart} from 'britecharts';
import {select} from 'd3-selection';

const stackedArea = {};

stackedArea.create = (el, {data}) => {
    let container = select(el);
    let chart = stackedAreaChart();

    container.datum(data).call(chart);
};

export default stackedArea;
