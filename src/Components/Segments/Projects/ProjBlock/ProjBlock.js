import React, { Component } from 'react';
import "./ProjBlock.css";

class ProjBlock extends Component {
    
    render() {
        return (
            <div className="container info-container">
                <div className="row">

                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={ require(`../../../../Assets/${this.props.imgsrc}`) } width="150px" height="150px" />
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.name}</h4>
                        <h4>{this.props.assets}</h4>
                        <h4>{this.props.description}</h4>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProjBlock;