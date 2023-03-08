import "./HeroImage2.css"
import React, {Component} from "react";

class HeroImage2 extends Component
{
    render()
    {
        return(

            <div className="app-heroimg">

                <div className="app-heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.subheading}</p>
                </div>

            </div>
        );

    }

}

export default HeroImage2;

