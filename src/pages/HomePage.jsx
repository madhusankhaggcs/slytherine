import React from "react";
import "../styles/HomePage.css";
import NavBar from "../components/NavBar";

export default function HomePage()
{
    return(
        <>
        <div className="home-full-screen">
            <div className="home-navBar">
                <NavBar/>
            </div>
            <div className="home-body">
                <div className="home-body-left-detail">
                    <h1 className="home-body-left-title">
                        Sri Lanka's #1 Online Learning Platform
                    </h1>
                    <p className="home-body-description">
                        Study Any Local Curriculum Lesson
                    </p>
                    <button className="home-body-left-signin">SignIn</button>
                    <button className="home-body-left-learnMore">Learn More</button>
                    <div className="home-body-left-count"></div>
                </div>
                <div className="home-body-right-img"></div>
            </div>
        </div>
        
        </>
    );
}