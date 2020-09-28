import React, { Component } from 'react';

import "./Projects.css";
import ProjBlock from './ProjBlock';
import { resumeData } from "../../../Assets/Data";

class Projects extends Component {
    
    render() {
        return (
            <div className="container segment-formatting">
                <div>
                    <h1 id="proj-title">Projects</h1>
                </div>
                <div>
                    <div>
                        { resumeData.map((data, key) => {
                            if (data.type == "Project") {
                                return (
                                    <div className="row">
                                        <ProjBlock
                                            name={data.name}
                                            assets={data.assets}
                                            description={data.description}
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

export default Projects;