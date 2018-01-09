import donutChart from 'britecharts/dist/umd/donut.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { donut as donutLoadingState } from 'britecharts/dist/umd/loading.min';

const donut = {};

donut.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = donutChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

donut.update = (el, data, configuration = {}, chart) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);
    applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data) {
        container.datum(data).call(chart);
    } else {
        container.call(chart);
    }

    return chart;
};

donut.destroy = () => {};

donut.loading = () => donutLoadingState;

export default donut;
