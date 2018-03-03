import sparklineChart from 'britecharts/dist/umd/sparkline.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

//TODO: Implement the correct loading state(line, bar, and donut are the available options atm)
import { linearGradient as sparklineLoadingState } from 'britecharts/dist/umd/loading.min';

const sparkline = {};

sparkline.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = sparklineChart();

    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

sparkline.update = (el, data, configuration = {}, chart) => {
    let container = select(el);

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

sparkline.destroy = () => {};

sparkline.loading = () => sparklineLoadingState;

export default sparkline;
