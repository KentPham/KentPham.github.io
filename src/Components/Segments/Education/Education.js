import React, { Component } from 'react';

import "./Education.css";
import EduBlock from './EduBlock';
import { resumeData } from "../../../Assets/Data";

class Education extends Component {
    
    render() {
        return (
            <div className="container segment-formatting">
                <div>
                    <h1 id="edu-title">Education</h1>
                </div>
                <div>
                    <div>
                        { resumeData.map((data, key) => {
                            if (data.type == "Education") {
                                return (
                                    <div className="row">
                                        <EduBlock 
                                            name={data.name}
                                            date={data.date}
                                            degree={data.degree}
                                            imgsrc={data.imgsrc}
                                        />
                                    </div>
                                );
                            } else {
                                return;
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;