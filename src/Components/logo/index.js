import "./index.scss";
import Klogo from "../../assets/images/reactlogo.png"
import "animate.css"

const Logo = () => {

    return(
        <div className="logo-container" >
            <img className="solid-logo animate__animated animate__rotateInDownRight animate__slower animate__delay-2s" src={Klogo} alt="logo" />
        </div>
    )
}


export default Logo;