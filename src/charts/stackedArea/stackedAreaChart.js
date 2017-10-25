import stackedAreaChart from 'britecharts/dist/umd/stackedArea.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const stackedArea = {};
let chart;

stackedArea.create = (el, data, configuration = {}) => {
    let container = select(el);

    chart = stackedAreaChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(chartConfigured);

    return chartConfigured;
};

stackedArea.update = (el, data, configuration = {}) => {
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

stackedArea.destroy = (el) => {
    el.innerHTML = '';
};

export default stackedArea;
