import React from "react";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import '../../components/NavBar/NavBar.scss';
import { Link } from "react-router-dom";


export default function NavBar() { 
    return (
        <div className="navbar">
            <Link to ={'/'}>
            <img className="navbar__logo" src={logo} alt="BrainflixLogo"/>
            </Link>
            <div className="navbar__container">
                <div className="navbar__search">
                    <input className="navbar__search--bar" name="search" placeholder="Search"></input>
                    <img className="navbar__search--avatar" src={avatar} alt="avatar"/>
                </div>
                <Link to={'/upload'}>
                <button type="button" className="navbar__upload">UPLOAD</button>
                </Link>
                <img className="navbar__avatar" src={avatar} alt="avatar"/>
            </div>
        </div>
    );
}