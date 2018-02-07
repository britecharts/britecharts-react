import {{lowerFirst componentName}}Chart from 'britecharts/dist/umd/{{lowerFirst componentName}}.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer, validateData} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

import { line as {{lowerFirst componentName}}LoadingState } from 'britecharts/dist/umd/loading.min';

const {{lowerFirst componentName}} = {};

{{lowerFirst componentName}}.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = {{lowerFirst componentName}}Chart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

{{lowerFirst componentName}}.update = (el, data, configuration = {}, chart) => {
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

{{lowerFirst componentName}}.destroy = () => {};

{{lowerFirst componentName}}.loading = () => {{lowerFirst componentName}}LoadingState;

export default {{lowerFirst componentName}};
