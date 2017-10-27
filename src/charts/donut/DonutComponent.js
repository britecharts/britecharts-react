import React, { Component } from 'react';
import PropTypes from 'prop-types';
import donut from './donutChart';


export default class Donut extends Component {

    static PropTypes = {
        data: PropTypes.array.isRequired,

        colorSchema: PropTypes.arrayOf(PropTypes.string),
        externalRadius: PropTypes.number,
        hasFixedHighlightedSlice: PropTypes.boolean,
        height: PropTypes.number,
        highlightSliceById: PropTypes.number,
        internalRadius: PropTypes.number,
        isAnimated: PropTypes.boolean,
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),
        orderingFunction: PropTypes.func,
        width: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,
    }

    static defaultProps = {
        chart: donut,
        isAnimated: true,
    }

    constructor(props) {
        super(props);

        // We want to make this throw an error if no data is provided
        if (!props.data) {
            throw new Error('Data is required!');
        }
    }

    componentDidMount() {
        this.props.chart.create(this._rootNode, this.props.data, this._getChartConfiguration());
    }

    componentDidUpdate() {
        this.props.chart.destroy(this._rootNode);
        this.props.chart.create(this._rootNode, this.props.data, this._getChartConfiguration());
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

        return configuration;
    }

    _setRef(componentNode) {
        if (componentNode) {
            this._rootNode = componentNode;
        }
    }

    render() {
        return (
            <div className="donut-container" ref={this._setRef.bind(this)} />
        );
    }
}
