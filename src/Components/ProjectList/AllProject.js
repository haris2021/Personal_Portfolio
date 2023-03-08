import React from "react";
import {NavLink} from "react-router-dom";
import "./ProjectList.css";


const AllProject = ( {obj} ) =>
{
    return(

         <div>

                             <div className="app-projectcard">

                                         <div className="app-imgdiv ">

                                             <img className="app-img" src={obj.image} alt="project work"/>

                                         </div>

                                          <span className="app-projectitle">{obj.title}</span>

                                         <div className="app-prodetails">

                                             <p >{obj.para}</p>

                                             <div className="row app-ch">

                                                 <div className="col-xl-4 col-md-4 app-lol">
                                                     <span className="app-techstack">Tech Stack</span>
                                                 </div>
                                                 <div className="col-xl-8 col-md-8 app-pop">
                                                     <span className="app-techstack1">{obj.tech}</span>
                                                 </div>

                                             </div>
{/*
                                             <div className="app-probtn">
                                                 <NavLink to={obj.git} className="app-btn" >View</NavLink>
                                             </div>*/}

                                         </div>

                             </div>


         </div>
     );
}

export default AllProject;

