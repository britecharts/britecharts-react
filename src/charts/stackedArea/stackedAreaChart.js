import stackedAreaChart from 'britecharts/dist/umd/stackedArea.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { line as stackedAreaLoadingState } from 'britecharts/dist/umd/loading.min';

const stackedArea = {};

stackedArea.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = stackedAreaChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

stackedArea.update = (el, data, configuration = {}, chart) => {
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

stackedArea.destroy = () => {};

stackedArea.loading = () => stackedAreaLoadingState;

export default stackedArea;
