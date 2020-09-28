import React, { Component } from 'react';
import "./EduBlock.css";

class EduBlock extends Component {
    
    render() {
        return (
            <div className="container info-container">
                <div className="row d-flex align-items-center">

                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={ require(`../../../../Assets/${this.props.imgsrc}`) } width="150px" height="150px" />
                    </div>
                    <div className="col-md-4">
                        <h4>{this.props.name}</h4>
                        <h4>{this.props.degree}</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>{this.props.date}</h4>
                    </div>

                </div>
            </div>
        )
    }
}

export default EduBlock;