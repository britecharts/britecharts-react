import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bar from './barChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

class Bar extends Component {

    static propTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.arrayOf(PropTypes.any),

        /**
         * Gets or Sets the padding of the chart
         */
        betweenBarsPadding: PropTypes.number,

        /**
         * Gets or Sets the colorSchema of the chart
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * If true, adds labels at the end of the bars
         */
        enableLabels: PropTypes.bool,

        /**
         * Gets or Sets the hasPercentage status
         */
        hasPercentage: PropTypes.bool,

        /**
         * Gets or Sets the hasSingleBarHighlight status. If the value is true (default), only the hovered bar is considered to be highlighted and will be darkened by default. If the value is false, all the bars but the hovered bar are considered to be highlighted and will be darkened (by default). To customize the bar highlight or remove it completely, use highlightBarFunction instead.
         */
        hasSingleBarHighlight: PropTypes.bool,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the highlightBarFunction function. The callback passed to this function returns a bar selection from the bar chart. Use this function if you want to apply a custom behavior to the highlighted bar on hover. When hasSingleBarHighlight is true the highlighted bar will be the one that was hovered by the user. When hasSingleBarHighlight is false the highlighted bars are all the bars but the hovered one. The default highlight effect on a bar is darkening the highlighted bar(s) color.
         */
        highlightBarFunction: PropTypes.func,

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
         * Offset between end of bar and start of the percentage bars
         */
        labelsMargin: PropTypes.number,

        /**
         * Gets or Sets the labels number format
         */
        labelsNumberFormat: PropTypes.string,

        /**
         * Get or Sets the labels text size
         */
        labelsSize: PropTypes.number,

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
         * Gets or Sets the valueLabel of the chart
         */
        valueLabel: PropTypes.number,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        /**
         * Gets or Sets the number of ticks of the x axis on the chart (Default is 5)
         */
        xTicks: PropTypes.number,

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
         * Space between y axis and chart (Default 10)
         */
        yAxisPaddingBetweenChart: PropTypes.number,

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

        /**
         * Internally used, do not overwrite.
         *
         * @ignore
         */
        createTooltip: PropTypes.func,
    }

    static defaultProps = {
        chart: bar,
        createTooltip: () => null,
        shouldShowLoadingState: false,
    }

    constructor(props) {
        super(props);

        this._setRef = this._setRef.bind(this);
    }

    componentDidMount() {
        if (!this.props.shouldShowLoadingState) {
            this._createChart();
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
        const configuration = { ...this.props };

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
            this.props.loadingState || this.props.chart.loading(),
            <div className="bar-container" ref={this._setRef} />
        );
    }
}

export default Bar;
