import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user'

class Main extends Component {

    render() {

        console.log('MAIN PROPS');
        console.log(this.props);

        let userList = this.props.userList;

        return (
            <div className="main">
                {/* <p> content sa kabila </p> */}
                <h2>Team Members</h2>

                <div className='user-list-panel'>
                    <ul className='user-list'>
                        {
                            //iterate the array
                            userList.map(user => {
                                return (
                                    <li> <User avatar = {user.avatar} 
                                               firstName = {user.first_name}
                                               lastName = {user.last_name}         /></li>
                                )


                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

Main.propTypes = { //used for parameter; ang paramerter na kukunin ay userList
    userList: PropTypes.array
}

export default Main;