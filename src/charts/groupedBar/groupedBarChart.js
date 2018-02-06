import groupedBarChart from 'britecharts/dist/umd/groupedBar.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { bar as groupedBarLoadingState } from 'britecharts/dist/umd/loading.min';

const groupedBar = {};

groupedBar.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = groupedBarChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

groupedBar.update = (el, data, configuration = {}, chart) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);
    applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data && data.length) {
        validateData(data);
        container.datum(data).call(chart);
    } else {
        container.call(chart);
    }

    return chart;
};

groupedBar.destroy = () => {};

groupedBar.loading = () => groupedBarLoadingState;

export default groupedBar;
