import AnimatedLetters from "../animatedLetters";
import "./index.scss"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";


const About = () =>{


  const [letterClass, setLetterClass] = useState("text-animate");

 useEffect(() => {
        return (
          ()=>{
            setTimeout(()=>{
              setLetterClass("text-animate-hover")
            }, 4000)
          }
        )
      }, [])


    return(

        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={["A","b","o","u","t"," ","m","e"]}
                    idx={15}/>
                </h1>
                <p>
                    I'n a very ambitious frontend developer looking for a role in established IT company with the opportunity to work with the lastest technologies on challenging and diverses projects.
                </p>
                <p>
                im quietly confident, naturally curious and perpetually working on improving my chops one problem at the time
                </p>
                <p>
                    If I need to describe myself in one sentence that would be a curious person that is always looking for answers and new things to learn.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faSass} color="#cc6699"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>
                    
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#f1502f"/>
                    </div>
                </div>
            </div>
        </div>

        <Loader type="pacman"></Loader>
        </>
        
    )
}


export default About;