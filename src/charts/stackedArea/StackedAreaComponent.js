import React from 'react';
import PropTypes from 'prop-types';
import stackedArea from './stackedAreaChart';


export default class StackedArea extends React.Component {

    static PropTypes = {
        data: PropTypes.array.isRequired,

        axisTimeCombinations: PropTypes.number,
        areaOpacity: PropTypes.number,
        aspectRatio: PropTypes.number,
        chart: PropTypes.func,
        colorSchema: PropTypes.arrayOf(PropTypes.string),
        dateLabel: PropTypes.number,
        grid: PropTypes.string,
        height: PropTypes.number,
        isAnimated: PropTypes.bool,
        keyLabel: PropTypes.number,
        locale: PropTypes.string,
        margin: PropTypes.shape({
            top: PropTypes.number,
            bottom: PropTypes.number,
            left: PropTypes.number,
            right: PropTypes.number,
        }),
        tooltipThreshold: PropTypes.number,
        valueLabel: PropTypes.number,
        width: PropTypes.number,
        xAxisCustomFormat: PropTypes.string,
        xAxisFormat: PropTypes.string,
        xTicks: PropTypes.number,
        yTicks: PropTypes.number,

        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,
    }

    static defaultProps = {
        chart: stackedArea,
    }

    static contextTypes = {
        customMouseOver: PropTypes.func,
        customMouseMove: PropTypes.func,
        customMouseOut: PropTypes.func,
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

    componentWillUnmount() {
        this.props.chart.destroy(this._rootNode);
    }

    /**
     * We want to remove the chart and data from the props in order to have a configuration object
     * @return {Object} Configuration object for the chart
     */
    _getChartConfiguration() {
        let configuration = {...this.props, ...this.context};

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
