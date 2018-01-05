import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// import './ChartContainer.scss';

const toggleLoading = (state) => ({loading: !state.loading});

export default class LoadingContainer extends PureComponent {
    static propTypes = {
        children: PropTypes.element,
        data: PropTypes.oneOfType(
            [
                PropTypes.object,
                PropTypes.array,
            ]
        ),
        loadingState: PropTypes.string,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        if (this.props.data !== null) {
            this.setState(toggleLoading);
        }
    }

    componentWillReceiveProps() {
        if (this.props.data !== null) {
            this.setState(toggleLoading);
        }
    }

    render() {
        const {
            children,
            loadingState,
        } = this.props;

        let className = 'loading-container';

        if (this.state.loading) {
            className += ' loading-container__loading';
        }

        return (
            <div className={className}>
                {
                    this.state.loading && 
                        <div
                            className="loading-container__svg-container"
                            dangerouslySetInnerHTML={{ __html: loadingState }}
                        />
                }
                {children}
            </div>
        );
    }
}
