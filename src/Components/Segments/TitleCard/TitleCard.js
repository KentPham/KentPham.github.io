import React, { Component } from 'react';
import "./TitleCard.css";

class TitleCard extends Component {
    
    render() {
        return (
            <div className="container ticar-background-container">
                <div className="container center">

                    <div className="row justify-content-center">
                        <h2>Hello There</h2>
                    </div>
                    <div className="row justify-content-center">
                        <h1>Kent Pham</h1>
                    </div>

                </div>
            </div>
        );
    }
}

export default TitleCard;