import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './ContactMe.css';

class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        //console.log(this.myRef.getBoundingClientRect());
        console.log(ReactDOM.findDOMNode(this.refs ['test']).getBoundingClientRect());
        return (
            <div ref="test" className="container contme-container">
                <div id="top-section" className="row">
                    <div class="col text-center">
                        <h1>Connect With Me</h1>
                    </div>
                </div>
                <div id="bottom-section" className="d-flex align-items-center justify-content-center">
                    <div className="row contme-bottom-container">
                        <div className="col-md-6">
                            <div className="contme-hyperlink-cont d-flex align-self-stretch align-items-center justify-content-center">
                                <img 
                                    src={ require('../../../Assets/linkedin.png')}
                                    height="50px"
                                    width="50px"
                                />
                                <div>
                                    <h3>Linkedin</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contme-hyperlink-cont d-flex align-self-stretch align-items-center justify-content-center">
                                <img 
                                    src={ require('../../../Assets/github.png')}
                                    height="50px"
                                    width="50px"
                                />
                                <div>
                                    <h3>Github</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contme-hyperlink-cont d-flex align-self-stretch align-items-center justify-content-center">
                                <img 
                                    src={ require('../../../Assets/email.png')}
                                    height="50px"
                                    width="50px"
                                />
                                <div>
                                    <h3>cyprez.pham@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contme-hyperlink-cont d-flex align-self-stretch align-items-center justify-content-center">
                                <img 
                                    src={ require('../../../Assets/phone.png')}
                                    height="50px"
                                    width="50px"
                                />
                                <div>
                                    <h3>(289) 990 5328</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;