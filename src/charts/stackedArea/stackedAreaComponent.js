import React, {PureComponent} from 'react';
import stackedArea from './stackedAreaChart';


export default class StackedArea extends PureComponent {

    componentDidMount() {
        const el = this.getDOMNode();

        stackedArea.create(el, {
            data: this.props.data,
        });
    }

    render() {
        return (
            <div className="stacked-area-container" />
        );
    }
}
