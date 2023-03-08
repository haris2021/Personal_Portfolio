import "./ProjectList.css"
import React from "react";
import {NavLink} from "react-router-dom";
import AllProject  from "./AllProject.js";
import PData from "./ProjectData.json"

const ProjectList = ( ) =>
{
    return(

        <div className="app-workcontainer">

            <div className="app-projectcontainer">

                    {
                            PData.map( (data,index)=>

                                <AllProject
                                    index = {data.id}
                                    obj = {data}
                                />
                            )

                        }
            </div>

        </div>

    );
}

export default ProjectList;
