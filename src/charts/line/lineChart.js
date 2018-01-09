import React from 'react';

import lineChart from 'britecharts/dist/umd/line.min';

import { select } from 'd3-selection';
import { validateConfiguration, validateContainer, validateData } from '../helpers/validation';
import { applyConfiguration } from '../helpers/configuration';

import { line as lineLoadingState } from 'britecharts/dist/umd/loading.min';

const line = {};

line.create = (el, data, configuration = {}) => {
    let container = select(el);
    let chart = lineChart();

    validateData(data);
    validateContainer(container);
    validateConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum(data).call(applyConfiguration(chart, configuration));

    return chart;
};

line.update = (el, data, configuration = {}, chart) => {
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

line.destroy = () => { };

line.loading = () => lineLoadingState;

export default line;