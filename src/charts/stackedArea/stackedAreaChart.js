import stackedAreaChart from 'britecharts/dist/umd/stackedArea.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { stackedArea as stackedAreaLoadingState } from 'britecharts/dist/umd/loading.min';

const stackedArea = {};

stackedArea.create = (el, data, configuration = {}) => {
    const container = select(el);
    const chart = stackedAreaChart();

    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

stackedArea.update = (el, data, configuration = {}, chart) => {
    const container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);
    applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (data && data.length) {
        container.datum(data).call(chart);
    } else {
        container.call(chart);
    }

    return chart;
};

stackedArea.destroy = () => {};

stackedArea.loading = () => stackedAreaLoadingState;

export default stackedArea;
