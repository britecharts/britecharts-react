import stepChart from 'britecharts/dist/umd/step.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

//TODO: Implement the correct loading state(line, bar, and donut are the available options atm)
import { line as stepLoadingState } from 'britecharts/dist/umd/loading.min';

const step = {};

step.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = stepChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

step.update = (el, data, configuration = {}, chart) => {
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

step.destroy = () => {};

step.loading = () => stepLoadingState;

export default step;
