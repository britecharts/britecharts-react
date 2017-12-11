import tooltipChart from 'britecharts/dist/umd/tooltip.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const tooltip = {};

tooltip.create = (el, configuration = {}) => {
    let container = select(el);
    let chart = tooltipChart();

    chart.topicLabel('values');

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum([]).call(chartConfigured);

    return chartConfigured;
};

tooltip.update = (el, configuration = {}, state = {}, chart) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    container.call(chartConfigured);

    if (state.isActive) {
        chartConfigured.show();
    } else {
        chartConfigured.hide();
    }

    if (state.dataPoint && state.topicColorMap && typeof state.x === 'number') {
        chartConfigured.update(state.dataPoint, state.topicColorMap, state.x, state.y);
    }

    return chartConfigured;
};

tooltip.destroy = () => {};

export default tooltip;
