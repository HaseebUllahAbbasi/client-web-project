import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import "./Nav.css";
import ProfileScreen from "./screens/ProfileScreen";

function Nav() 
{
    const [show, handleShow] = useState(false);
    const [showprofile, setProfile] = useState(false);
    let history = useHistory()

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.addEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav  ${show && 'nav__black'}`}>
            <div className="nav__contents">
            <img
                    onClick={()=>history.push("/")}
                    className="nav__logo"  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" >
                </img>
                <img
                    className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    onClick={()=>history.push("/profile")}
                    alt=""
                ></img>
            </div>
        </div>
    );
}
export default Nav;