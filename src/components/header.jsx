import React, { Component } from 'react';

class Header extends Component {
    
    render(){
        return(
            <div className="header">
                <h1> HEADER na nasa kabila </h1>
                <p> Time: {this.props.date}</p>
            </div>
        );
    }
}

class Header2 extends Component {
    
    render(){
        return(
            <div className="header2">
                <h1> HEADER 2 ITECH </h1>
            </div>
        );
    }
}

// export default Header; -- default

export {
    Header, //list of components na pwede niya i-export
    Header2
}

