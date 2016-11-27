import React from 'react';

export default class FormatDate extends React.Component {
    render() {
        return (
            <span>
                {this.props.date.toLocaleDateString()}
            </span>
        );
    }
}