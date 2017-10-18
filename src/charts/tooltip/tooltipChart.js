import tooltipChart from 'britecharts/dist/umd/tooltip.min';
import {select} from 'd3-selection';
import {validateConfiguration, validateContainer} from '../helpers/validation';
import {applyConfiguration} from '../helpers/configuration';

const tooltip = {};
let chart;

tooltip.create = (el, configuration = {}) => {
    let container = select(el);

    chart = tooltipChart();

    chart.topicLabel('values');

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    // Calls the chart with the container and dataset
    container.datum([]).call(chartConfigured);

    return chartConfigured;
};

tooltip.update = (el, configuration = {}, state = {}) => {
    let container = select(el);

    validateContainer(container);
    validateConfiguration(chart, configuration);

    let chartConfigured = applyConfiguration(chart, configuration);

    container.call(chartConfigured);

    if (state.dataPoint && state.topicColorMap && state.x) {
        chart.update(state.dataPoint, state.topicColorMap, state.x, state.y);
    }

    if (state.isActive) {
        chart.show();
    } else {
        chart.hide();
    }


    return chartConfigured;
};

tooltip.destroy = () => {
    // Cleanup methods here
};

export default tooltip;
