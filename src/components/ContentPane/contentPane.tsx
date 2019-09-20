import React from 'react';
import PropTypes from 'prop-types';
import './contentPane.scss';

type ContentPaneInjectedPropTypes = {
    order: string,
};

type ContentPanePropTypes = ContentPaneInjectedPropTypes;

class ContentPane extends React.Component<ContentPanePropTypes> {

    static propTypes = {
        order: PropTypes.string.isRequired,
    };

    render() {
        return (
        <div className={this.props.order}>
        </div>
        );
    }
};

export default ContentPane;
