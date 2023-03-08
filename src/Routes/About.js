import React from "react";
import NavBar from "../Components/NavBar/NavBar.js";
import Footer from "../Components/Footer/Footer.js"
import HeroImage2 from "../Components/HeroImage2/HeroImage2.js";
import AboutInfo from "../Components/AboutContent/AboutContent.js";

const AboutContent =( ) =>{
    return(
        <div >
            <NavBar/>
            <HeroImage2 heading="Aspiring Software enginner" subheading="Looking for Software enginner COOP'2023"/>
            <AboutInfo/>
            <Footer/>
        </div>
    );
}

export default AboutContent;