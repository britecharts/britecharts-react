import React from 'react';
import PropTypes from 'prop-types';
import line from './lineChart';
import { axisTimeCombinations as combinations } from '../constants';
import { loadingContainerWrapper } from '../loading/LoadingContainer';

class Line extends React.Component {
    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.object,

        /**
         * Gets or Sets the aspect ratio of the chart
         */
        aspectRatio: PropTypes.number,

        /**
         * Gets or Sets the colorSchema of the chart
         */

        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the dateLabel of the chart
         */
        dateLabel: PropTypes.string,

        /**
         * Chart exported to png and a download action is fired
         */
        exportChart: PropTypes.func,

        /**
         * Gets or Sets the grid mode.
         */
        grid: PropTypes.string,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the isAnimated property of the chart, making it to animate
         * when render. By default this is 'false'
         */
        isAnimated: PropTypes.bool,

        /**
         * Gets or Sets the curve of the line chart
         */
        lineCurve: PropTypes.string,

        /**
         * Gets or Sets the gradient colors of the line chart when there is only one line
         */
        lineGradient: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the loading state of the chart
         */
        loadingState: PropTypes.string,

        /**
         * Pass language tag for the tooltip to localize the date. Feature
         * uses Intl.DateTimeFormat, for compatability and support, refer
         * to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
         */
        locale: PropTypes.string,

        /**
         * Gets or Sets the margin of the chart
         */
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),

        /**
         * Gets or Sets the number format of the line chart
         */
        numberFormat: PropTypes.string,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

        /**
         * Gets or Sets the minimum width of the graph in order
         * to show the tooltip NOTE: This could also depend on the aspect ratio
         */
        tooltipThreshold: PropTypes.number,

        /**
         * Gets or Sets the topicLabel of the chart
         */
        topicLabel: PropTypes.number,

        /**
         * Gets or Sets the valueLabel of the chart
         */
        valueLabel: PropTypes.number,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Exposes the ability to force the chart to show a certain x format
         * It requires a `xAxisFormat` of 'custom' in order to work.
         * NOTE: localization not supported
         */
        xAxisCustomFormat: PropTypes.string,

        /**
         * Exposes the ability to force the chart to show a certain x axis grouping
         */
        xAxisFormat: PropTypes.string,

        /**
         * Gets or Sets the label of the X axis of the chart
         */
        xAxisLabel: PropTypes.string,

        /**
         * Exposes the ability to force the chart to show a certain x ticks. It
         * requires a `xAxisFormat` of 'custom' in order to work. NOTE: This
         * value needs to be a multiple of 2, 5 or 10. They won't always work
         * as expected, as D3 decides at the end how many and where the ticks will appear.
         */
        xTicks: PropTypes.number,

        /**
         * Gets or Sets the label of the Y axis of the chart
         */
        yAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the yAxisLabelPadding of the chart. The default value is -36
         */
        yAxisLabelPadding: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the y axis on the chart (Default is 5)
         */
        yTicks: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        chart: PropTypes.object,

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        createTooltip: PropTypes.func,
    };

    static defaultProps = {
        chart: line,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    };

    constructor(props) {
        super(props);

        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        const { shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            this.createChart();
        }
    }

    componentDidUpdate() {
        const { createTooltip, shouldShowLoadingState } = this.props;
        if (!shouldShowLoadingState) {
            if (!this.chart) {
                this.createChart();
            } else {
                this.updateChart();
                createTooltip();
            }
        }
    }

    componentWillUnmount() {
        const { chart } = this.props;
        chart.destroy(this.rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    getChartConfiguration() {
        const configuration = { ...this.props };

        delete configuration.data;
        delete configuration.chart;
        delete configuration.createTooltip;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    setRef(componentNode) {
        this.rootNode = componentNode;
    }

    createChart() {
        this.chart = this.props.chart.create(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration()
        );
    }

    updateChart() {
        this.props.chart.update(
            this.rootNode,
            this.props.data,
            this.getChartConfiguration(),
            this.chart
        );
    }

    render() {
        const { chart, loadingState } = this.props;
        return loadingContainerWrapper(
            this.props,
            loadingState || chart.loading(),
            <div className="line-container" ref={this.setRef} />
        );
    }
}

export default Line;

/**
 * Exposes the constants to be used to force the x axis to respect a
 * certain granularity current options: MINUTE_HOUR, HOUR_DAY, DAY_MONTH, MONTH_YEAR
 */
export const axisTimeCombinations = combinations;
