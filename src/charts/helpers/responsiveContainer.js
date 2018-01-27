import React, {Component} from 'react';
import optimizedResize from './optimizedResize.js';

export default class ResponsiveContainer extends Component {

    state = {
        width: 500,
    }

    componentDidMount() {
        optimizedResize.addHorizontalMain(this.updateSize.bind(this));

        this.updateSize();
    }

    componentWillUnmount() {
        optimizedResize.clearAll();

        this.updateSize();
    }

    updateSize() {
        if (this._rootNode) {
            let width = this._rootNode.clientWidth;

            if (width !== this.state.width) {
                this.setState({
                    width,
                });
            }
        }
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return (
            <div className="responsive-container" ref={this._setRef.bind(this)}>
                {this.props.render({ width: this.state.width })}
            </div>
        );
    }
}
