import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    render() {
        return (
            <div>
                {/* <li> Hello {user.first_name} {user.last_name} </li> */}
                <img className='user-pic' src={this.props.avatar} alt='none' />
                <p className='user-name'>{this.props.firstName} {this.props.lastName}</p>
            </div>
        );
    }
}

User.propTypes = { //used for parameter; ang paramerter na kukunin ay userList
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string
}

export default User;