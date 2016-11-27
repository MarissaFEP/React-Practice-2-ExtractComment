import React, {PropTypes} from 'react';

export default class Avatar extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {
        return (
            <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        );
    }
}