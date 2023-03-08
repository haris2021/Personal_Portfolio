import React, {useRef} from "react";
import "./Form.css";
import emailjs from '@emailjs/browser';

const Form = ( ) =>
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_irb12rm', 'template_4ffq6pl', form.current, 'S2lZFUr28xdOzIaBH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return(

        <div className="container app-div">

            <form ref={form} onSubmit={sendEmail} className="app-form">

                <h4>Happy To connect With You</h4>

                    <label For="name" className="form-label"/>
                    <input type="text"  placeholder="Your name" title="Name" className="form-control" id="name" name='user_name' aria-describedby="namehelp"/>

                    <label For="email" className="form-label"/>
                    <input type="email" className="form-control" id="email" name='user_email' placeholder="EmailId" aria-describedby="emailHelp"/>

                    <label For="message" className="form-label"/>
                    <textarea id="message" cols="30"  name='user_message' placeholder="Regarding?"></textarea>

                <button type="submit" className="btn btn-primary">Send</button>


            </form>


        </div>


    );
}

export default Form;