import React from 'react';
import stackedArea from './stackedAreaChart';


export default class StackedArea extends React.Component {

    static defaultProps = {
        chart: stackedArea,
    }

    componentDidMount() {
        this.props.chart.create(this._rootNode, {
            data: this.props.data,
        });
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
