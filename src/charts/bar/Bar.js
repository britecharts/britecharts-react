import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bar from './barChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

class Bar extends Component {

    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any).isRequired,

        /**
         * Gets or Sets the padding of the chart
         */
        betweenBarsPadding: PropTypes.number,

        /**
         * Gets or Sets the colorSchema of the chart
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Default false. If true, adds percentage labels at the end of the bars
         */
        enablePercentageLabels: PropTypes.bool,

        /**
         * Gets or Sets the hasPercentage status
         */
        hasPercentage: PropTypes.bool,

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
         * Gets or Sets the nameLabel of the chart
         */
        nameLabel: PropTypes.number,


        /**
         * Gets or Sets the number format of the bar chart
         */
        numberFormat: PropTypes.string,

        /**
         * Changes the order of items given the custom function
         */
        orderingFunction: PropTypes.func,

        /**
         * Configurable extension of the x axis if your max point was 50%
         * you might want to show x axis to 60%, pass 1.2
         */
        percentageAxisToMaxRatio: PropTypes.number,

        /**
         * Default 10px. Offset between end of bar and start of the percentage bars
         */
        percentageLabelMargin: PropTypes.number,


        /**
         * Gets or Sets whether the color list should be reversed or not
         */
        shouldReverseColorList: PropTypes.bool,

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
         * Gets or Sets the numberFormat to a percentage format if true (default false)
         */
        usePercentage: PropTypes.bool,

        /**
         * Gets or Sets the valueLabel of the chart
         */
        valueLabel: PropTypes.number,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Space between y axis and chart (Default 10)
         */
        yAxisPaddingBetweenChart: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the x axis on the chart (Default is 5)
         */
        xTicks: PropTypes.number,

        /**
         * Gets or Sets the number of vertical ticks on the chart (Default is 6)
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
    }

    static defaultProps = {
        chart: bar,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    }

    constructor(props) {
        super(props);

        // We want to make this throw an error if no data is provided
        if (!props.data) {
            throw new Error('Data is required!');
        }
    }

    componentDidMount() {
        this._chart = this.props.chart.create(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration()
        );
    }

    componentDidUpdate() {
        this.props.chart.update(
            this._rootNode,
            this.props.data,
            this._getChartConfiguration(),
            this._chart
        );

        this.props.createTooltip();
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = { ...this.props };

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
            <div className="bar-container" ref={this._setRef.bind(this)} />
        );
    }
}

export default Bar;
