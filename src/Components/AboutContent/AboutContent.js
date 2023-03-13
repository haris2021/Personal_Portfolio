import React from "react";
import "./AboutContent.css"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const PDF_file_url = 'https://main--jazzy-semifreddo-bcf258.netlify.app/HarisGunasekaran_Resume.pdf'
const Cl_file_url = 'https://main--jazzy-semifreddo-bcf258.netlify.app/Haris_Gunasekaran_CoverLetter_.pdf'

const AboutContent = ( ) =>
{
            const downloadFileatURL =(url)=>{

            const filename = url.split('/').pop()
            const atag = document.createElement('a')
            atag.href = url;
            atag.setAttribute('download',filename)
            document.body.appendChild(atag)
            atag.click();
            atag.remove();
            }


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

                                <button onClick={()=>{downloadFileatURL(PDF_file_url)}} className="app-aboutbtn">Download Resume</button>

                            </div>

                            <div className="col-xl-6 col-md-6 col-sm-12 app-t">

                                <button onClick={()=>{downloadFileatURL(Cl_file_url)}} className="app-lt app-aboutbtn" >Download CV</button>

                             </div>

                        </div>


                    </div>


                </div>
        </div>
    );
}

export default AboutContent;