import React, { Component } from 'react';
import PropTypes from 'prop-types';
import donut from './donutChart';
import {loadingContainerWrapper} from '../loading/LoadingContainer';

export default class Donut extends Component {

    static PropTypes = {
        /**
         * Internally used, do not overwrite.
         */
        data: PropTypes.array.isRequired,

        /**
         * Gets or Sets the colorSchema of the chart
         */
        colorSchema: PropTypes.arrayOf(PropTypes.string),

        /**
         * Gets or Sets the externalRadius of the chart
         */
        externalRadius: PropTypes.number,

        /**
         * Gets or Sets the hasFixedHighlightedSlice property of the chart, making it
         * to highlight the selected slice id set with `highlightSliceById` all the time.
         */
        hasFixedHighlightedSlice: PropTypes.boolean,

        /**
         * Gets or Sets the height of the chart
         */
        height: PropTypes.number,

        /**
         * Gets or Sets the id of the slice to highlight
         */
        highlightSliceById: PropTypes.number,

        /**
         * Gets or Sets the internalRadius of the chart
         */
        internalRadius: PropTypes.number,

        /**
         * Gets or Sets the isAnimated property of the chart, making it to animate
         * when render. By default this is 'false'
         */
        isAnimated: PropTypes.boolean,

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
         * Changes the order of items given custom function
         */
        orderingFunction: PropTypes.func,

        /**
         * Gets or Sets whether a loading state will be shown
         */
        shouldShowLoadingState: PropTypes.bool,

        /**
         * Gets or Sets the width of the chart
         */
        width: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseOut: PropTypes.func,

        /**
         * Internally used, do not overwrite.
         */
        chart: PropTypes.object,
    }

    static defaultProps = {
        chart: donut,
        isAnimated: true,
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
    }

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = {...this.props};

        delete configuration.data;
        delete configuration.chart;
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
            <div className="donut-container" ref={this._setRef.bind(this)} />
        );
    }
}
