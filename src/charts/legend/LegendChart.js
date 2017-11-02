import legendChart from 'britecharts/dist/umd/legend.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const legend = {};
let chart;

legend.create = (el, data, configuration = {}) => {
    let container = select(el);

    chart = legendChart();

    validateContainer(container);
    validateData(data);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(chartConfigured);

    return chartConfigured;
};

legend.update = (el, data, configuration = {}) => {
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

legend.destroy = (el) => {
    el.innerHTML = '';
};

export default legend;


