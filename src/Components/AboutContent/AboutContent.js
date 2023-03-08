import React from "react";
import "./AboutContent.css"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const AboutContent = ( ) =>
{
        return(
        <div >

                <div className="row app-about">

                    <div className="col-xl-6 col-md-6 col-sm-12 app-contentleft">
                        <img src="https://t4.ftcdn.net/jpg/02/70/62/65/360_F_270626564_CA2BB1UXQ8WsmNPyLASzW6XnoJwPoknr.jpg" className="app-profileimg" alt="profile"/>
                    </div>


                    <div className="col-xl-6 col-md-6 col-sm-12 app-contentright">

                        <p>I love designing software solutions and working on complex real world problems.
                            Would love to contribute in designing, development, and deployment of real world applications.
                            My strong suit includes writing clean, well designed code in C++, C , JAVA that follows SOLID principles.
                            Apart from that I have prior experience working in frontend ,
                            backend of websites which made me exposed to various technologies
                            like React, Node js and Relational Databases, Swing and GUI.</p>

                        <div className="row">

                                    <div className="col-xl-6 col-md-6 col-sm-12 app-l">

                                       <a href="../../public/Resume/HarisGunasekaran_Resume.pdf" download=" HarisGunasekaran_Resume.pdf "> <button className="app-aboutbtn">Download Resume</button> </a>

                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-12 app-t">

                                        <a href="../../public/Resume/Haris_Gunasekaran_CoverLetter_.pdf" download="Haris_Gunasekaran_CoverLetter_.pdf"><button className="app-lt app-aboutbtn" >Download CV</button></a>

                                    </div>
                        </div>


                    </div>


                </div>
        </div>
    );
}

export default AboutContent;