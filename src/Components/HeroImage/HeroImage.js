import "./HeroImage.css"
import React from "react";
import {Link} from "react-router-dom";

const HeroImage = ( ) =>
{

    return(
        <div className="app-hero">

            <div className="app-mask">
                 <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      className="app-introimg" alt="IntroImage"/>
            </div>

            <div className="app-content">
                <p>HI, I'M A Graduate Student Looking for COOP </p>
                <h1>Software Developer COOP</h1>

                <div>

                        <Link to="/project" className="app-herobtn">Projects</Link>
                        <Link to="/Contact" className="app-herobtn">Contact</Link>

                </div>

            </div>

        </div>
    )

}

export default HeroImage;
