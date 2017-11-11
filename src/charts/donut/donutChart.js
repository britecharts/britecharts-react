import donutChart from 'britecharts/dist/umd/donut.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const donut = {};
let chart;

donut.create = (el, data, configuration = {}) => {
    let container = select(el);

    chart = donutChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(chartConfigured);

    return chartConfigured;
};

donut.update = (el, data, configuration = {}) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data) {
        container.datum(data).call(chartConfigured);
    } else {
        container.call(chartConfigured);
    }

    return chartConfigured;
};

donut.destroy = (el) => {
    el.innerHTML = ''; // eslint-disable-line no-param-reassign
};

export default donut;
