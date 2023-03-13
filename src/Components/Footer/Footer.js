import "./Footer.css"
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = ( ) =>
{
    return(
        <div className="app-footer">

            <div className="app-footer-container">

                <div className="app-left">

                    <div className="row app-location">

                        <div className="col-xl-2 col-md-2 col-sm-3">
                            <FaHome size={20} style={ {color:"#fff" , marginTop:"5px" , marginRight:"35px", marginLeft:"15px"} }/>
                        </div>

                        <div className="col-xl-10 col-md-10 col-sm-9">
                            <p>130 Calumet Street, #2</p>
                            <p>Boston, MA, USA</p>
                        </div>

                    </div>

                    <div className="row app-phoneno">

                        <div className="col-xl-2 col-md-2 col-sm-3  app-icon">
                            <FaPhone style={{color:"#fff", marginRight:"65px", marginLeft:"11px"}} size={20}/>
                        </div>

                        <div className="col-xl-10 col-md-10 col-sm-9  app-para">
                            <p>+1-617-909-9502</p>
                        </div>

                    </div>

                    <div className="row app-email">

                        <div className="col-xl-2 col-md-2 col-sm-3 app-icon">
                            <FaMailBulk size={20} style={{color:"#fff", marginRight:"35px", marginLeft:"11px"}}/>
                        </div>

                        <div className="col-xl-10 col-md-10 col-sm-9 app-para">
                            <p>gharis2k20@gmail.com</p>
                        </div>

                    </div>


                </div>

                <div className="app-right ">

                              <Link to="https://www.linkedin.com/in/haris11/"><FaLinkedin style={{color:"#fff",marginTop:"30px"}} size={20}/></Link>
                             {/* <Link to="#"><FaGithub style={{color:"#fff",marginTop:"30px"}} size={20} /></Link>*/}
                              <Link to="https://twitter.com/Harisgunasekar"><FaTwitter style={{color:"#fff", marginTop:"30px"}} size={20} /></Link>


                </div>

            </div>

        </div>
    );
}

export default Footer;
