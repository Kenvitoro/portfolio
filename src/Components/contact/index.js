import "./index.scss"
import AnimatedLetters from "../animatedLetters/index"
import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";



const Contact = () =>{
    const [letterClass, setLetterClass] = useState("text-animate");

    const refForm = useRef()

    useEffect(() => {
           return (
             ()=>{
               setTimeout(()=>{
                 setLetterClass("text-animate-hover")
               }, 4000)
             }
           )
         }, [])


         const sendEmail = (e) =>{
            e.preventDefault(); 

            emailjs
            .sendForm(
                "service_zqv09ka",
                "template_47vxud8",
                refForm.current,
                "KXpsUYwYLEKUJ8D0A"
            )
            .then(()=>{
                alert("Message succesfully sent!")
                window.location.reload(false)
            })

            .catch(()=>{
                alert("Failed to send the message, please try again")
            })
         }
    
    return(
        <>
         <Loader type="pacman"/>
        <div className=" container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["C","o","n","t","a","c"," ","m","e",]}
                    idx={15}
                    />
                </h1>
                <p>
                    If you have a request or question, don't hesitate to contact me using the form below. 
                </p>

                <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required/>
                    </li>
                    <li className="half">
                        <input type="email" name="email" placeholder="Email" required/>
                    </li>
                    <li>
                        <input type="text" name="Subject" placeholder="Subject" required/>
                    </li>
                    <li>
                        <textarea placeholder="Message " name="message" required></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND"/>
                    </li>

                </ul>
            </form>

        </div>

            </div>
            
        </div>

        

       
        </>
    )
}


export default Contact;