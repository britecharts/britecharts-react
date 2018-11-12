import React from 'react';
import optimizedResize from './optimizedResize.js';

export default function(Component) {
    return class WithResponsiveness extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                width: 500,
            };

            this._setRef = this._setRef.bind(this);
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
            const width = this._rootNode.clientWidth;

            if (width !== this.state.width) {
                this.setState({
                    width,
                });
            }
        }

        _setRef(componentNode) {
            this._rootNode = componentNode;
        }

        render() {
            return (
                <div className="responsive-container" ref={this._setRef}>
                    <Component
                        width={this.state.width}
                        {...this.props}
                    />
                </div>
            );
        }
    };
}
