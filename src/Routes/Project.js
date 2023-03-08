import React from "react";
import NavBar from "../Components/NavBar/NavBar.js";
import Footer from "../Components/Footer/Footer.js"
import HeroImage2 from "../Components/HeroImage2/HeroImage2.js";
import ProjectList from "../Components/ProjectList/ProjectList.js"

const Project =( ) =>{
    return(
        <div>
            <NavBar/>
            <HeroImage2 heading="Project" subheading="Some of my Recent Projects"/>
            <ProjectList/>
            <Footer/>
        </div>
    );
}

export default Project;