import React from "react";
import NavBar from "../Components/NavBar/NavBar.js";
import Footer from "../Components/Footer/Footer.js"
import HeroImage2 from "../Components/HeroImage2/HeroImage2";
import Form from "../Components/Form/Form.js"

const Contact =( ) =>{
    return(
        <div className="bg-black">
            <NavBar/>
            <HeroImage2 heading="Contact" subheading="Let's chat here"/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Contact;