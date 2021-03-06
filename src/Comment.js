import React from 'react';

import UserInfo from './UserInfo';
import FormatDate from './FormatDate';

export default class Comment extends React.Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    <FormatDate date={this.props.date} />
                </div>
            </div>
        );
    }    
}