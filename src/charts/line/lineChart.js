import lineChart from 'britecharts/dist/umd/line.min';

import { select } from 'd3-selection';
import { validateConfiguration, validateContainer} from '../helpers/validation';
import { applyConfiguration } from '../helpers/configuration';

import { line as lineLoadingState } from 'britecharts/dist/umd/loading.min';

const line = {};

line.create = (el, data, configuration = {}) => {
    const container = select(el);
    const chart = lineChart();

    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

line.update = (el, data, configuration = {}, chart) => {
    const container = select(el);
    const shouldUpdateData = data && (
        (data.data && data.data.length) ||
        (data.dataByTopic && data.dataByTopic.length)
    );

    validateContainer(container);
    validateConfiguration(chart, configuration);
    applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    if (shouldUpdateData) {
        container.datum(data).call(chart);
    } else {
        container.call(chart);
    }

    return chart;
};

line.destroy = () => { };

line.loading = () => lineLoadingState;

export default line;
