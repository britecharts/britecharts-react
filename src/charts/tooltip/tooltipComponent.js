import React from 'react';
import PropTypes from 'prop-types';
import tooltip from './tooltipChart';


export default class TooltipComponent extends React.Component {

    static PropTypes = {
        dateFormat: PropTypes.string,
        dateLabel: PropTypes.string,
        locale: PropTypes.string,
        nameLabel: PropTypes.string,
        shouldShowDateInTitle: PropTypes.bool,
        title: PropTypes.string,
        topicLabel: PropTypes.string,
        valueFormat: PropTypes.string,
        valueLabel: PropTypes.string,
        topicsOrder: PropTypes.arrayOf(PropTypes.string),

        // hide
        // show
        // update(dataPoint, colorMapping, position)
    }

    static defaultProps = {
        chart: tooltip,
    }

    componentDidMount() {
        this.props.chart.create(this._rootNode, this._getChartConfiguration());
    }

    componentDidUpdate() {
        this.props.chart.update(this._rootNode, this._getChartConfiguration());
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
            <div className="tooltip-container" ref={this._setRef.bind(this)} />
        );
    }

}


// dateFormat string
// dateLabel string
// hide
// locale string
// nameLabel string
// shouldShowDateInTitle
// show
// title String
// topicLabel String
// topicsOrder Array of strings
// update(dataPoint, colorMapping, position)
// valueFormat string
// valueLabel string
