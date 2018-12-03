import React from 'react';
import PropTypes from 'prop-types';
import groupedBar from './groupedBarChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

class GroupedBar extends React.Component {

    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any),

        /**
         * Gets or Sets the aspect ratio of the chart
         */
        aspectRatio: PropTypes.number,

        /**
         * Gets or Sets the colorSchema of the chart
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Chart exported to png and a download action is fired
         */
        exportChart: PropTypes.func,

        /**
         * Gets or Sets the grid mode.
         */
        grid: PropTypes.string,

        /**
         * Gets or Sets the groupLabel of the chart
         */
        groupLabel: PropTypes.string,

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
         * Gets or Sets the horizontal direction of the chart
         */
        isHorizontal: PropTypes.bool,

        /**
         * Gets or Sets the loading state of the chart
         */
        loadingState: PropTypes.string,

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
         * Gets or Sets the nameLabel of the chart
         */
        nameLabel: PropTypes.number,

        /**
         * Gets or Sets the minimum width of the graph in order to show the tooltip NOTE: This could also depend on the aspect ratio
         */
        tooltipThreshold: PropTypes.number,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

        /**
         * Gets or Sets the valueLabel of the chart
         */
        valueLabel: PropTypes.number,

        /**
         * Gets or Sets the valueLabelFormat of the chart
         */
        valueLabelFormat: PropTypes.string,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Exposes the ability to force the chart to show a certain x ticks. It
         * requires a `xAxisFormat` of 'custom' in order to work. NOTE: This
         * value needs to be a multiple of 2, 5 or 10. They won't always work
         * as expected, as D3 decides at the end how many and where the ticks will appear.
         */
        xTicks: PropTypes.number,

        /**
         * Gets or Sets the y-axis label of the chart
         */
        yAxisLabel: PropTypes.string,

        /**
         * Gets or Sets the offset of the yAxisLabel of the chart. The method accepts both positive and negative values. The default value is -60
         */
        yAxisLabelOffset: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the y axis on the chart (Default is 5)
         */
        yTicks: PropTypes.number,

        /**
         * Gets or Sets the x and y offset of ticks of the y axis on the chart
         */
        yTickTextOffset: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
        }),

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
    }

    static defaultProps = {
        chart: groupedBar,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    }

    constructor(props) {
        super(props);

        this._setRef = this._setRef.bind(this);
    }

    componentDidMount() {
        if (!this.props.shouldShowLoadingState) {
            if (this.props.data !== null) {
                this._createChart();
            }
        }
    }

    componentDidUpdate() {
        if (!this.props.shouldShowLoadingState) {
            if (!this._chart) {
                this._createChart();
            } else {
                this._updateChart();
                this.props.createTooltip();
            }
        }
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    _createChart() {
        this._chart = this.props.chart.create(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration()
        );
    }

    _updateChart() {
        this.props.chart.update(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration(),
            this._chart
        );
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        const configuration = {...this.props};

        delete configuration.data;
        delete configuration.chart;
        delete configuration.createTooltip;
        delete configuration.shouldShowLoadingState;

        return configuration;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return loadingContainerWrapper(
            this.props,
            this.props.chart.loading(),
            <div className="grouped-bar-container" ref={this._setRef} />
        );
    }
}

export default GroupedBar;
