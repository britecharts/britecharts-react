import React from 'react';
import PropTypes from 'prop-types';
import LegendChart from './LegendChart';


export default class Legend extends React.Component {

    static defaultProps = {
        chart: LegendChart,
    }

    static PropTypes = {
        colorSchema: PropTypes.arrayOf(PropTypes.string),
        height: PropTypes.number,
        highlight: PropTypes.number,
        isHorizontal: PropTypes.bool,
        margin: PropTypes.object,
        markerSize: PropTypes.number,
        numberFormat: PropTypes.string,
        width: PropTypes.number,
        data: PropTypes.array.isRequired,
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
            <div className="legend-container" ref={this._setRef.bind(this)} />
        );
    }
}
