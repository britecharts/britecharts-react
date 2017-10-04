import tooltipChart from 'britecharts/dist/umd/tooltip.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const tooltip = {};
let chart;

tooltip.create = (el, configuration = {}) => {
    let container = select(el);

    chart = tooltipChart();

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum([]).call(chartConfigured);

    return chartConfigured;
};

tooltip.update = (el, data, configuration = {}) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data && data.length) {
        container.datum(data).call(chartConfigured);
    } else {
        container.call(chartConfigured);
    }

    return chartConfigured;
};

tooltip.destroy = () => {
    // Cleanup methods here
};

export default tooltip;
