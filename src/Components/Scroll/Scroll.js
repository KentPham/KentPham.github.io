import React, { Component } from 'react';

import './Scroll.css';

class Scroll extends Component {
    render() {
        return (
            <div className="scroll-formatting d-flex flex-column justify-content-center align-items-center">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        );
    }
}

export default Scroll;