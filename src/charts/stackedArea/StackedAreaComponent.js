import React from 'react';
import PropTypes from 'prop-types';
import stackedArea from './stackedAreaChart';


export default class StackedArea extends React.Component {

    static defaultProps = {
        chart: stackedArea,
    }

    static PropTypes = {
        data: PropTypes.array.isRequired,
        axisTimeCombinations: PropTypes.number,
        areaOpacity: PropTypes.object,
        aspectRatio: PropTypes.number,
        colorSchema: PropTypes.arrayOf(PropTypes.string),
        dateLabel: PropTypes.number,
        grid: PropTypes.string,
        height: PropTypes.number,
        isAnimated: PropTypes.bool,
        keyLabel: PropTypes.number,
        locale: PropTypes.string,
        margin: PropTypes.object,
        tooltipThreshold: PropTypes.object,
        valueLabel: PropTypes.number,
        width: PropTypes.number,
        xAxisCustomFormat: PropTypes.string,
        xAxisFormat: PropTypes.string,
        xTicks: PropTypes.number,
        yTicks: PropTypes.number,
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
        this.props.chart.update(this._rootNode, this.props.data, this._getChartConfiguration());
    }

    // componentWillUnmount() {
    //     this.props.chart.destroy(this._rootNode);
    // }

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
            <div className="stacked-area-container" ref={this._setRef.bind(this)} />
        );
    }
}
