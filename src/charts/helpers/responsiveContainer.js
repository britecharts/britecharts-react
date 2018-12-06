import React, {Component} from 'react';
import optimizedResize from './optimizedResize.js';

export default class ResponsiveContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 500,
        };

        this._setRef = this._setRef.bind(this);
        this.updateSize = this.updateSize.bind(this);
    }

    componentDidMount() {
        optimizedResize.addHorizontal(this.updateSize);

        this.updateSize();
    }

    componentWillUnmount() {
        optimizedResize.clearAll();

        this.updateSize();
    }

    updateSize() {
        if (this._rootNode) {
            const width = this._rootNode.clientWidth;

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
            <div className="responsive-container" ref={this._setRef}>
                {this.props.render({ width: this.state.width })}
            </div>
        );
    }
}
