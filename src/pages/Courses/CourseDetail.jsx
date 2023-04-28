import React from "react";
import "../../styles/HomePage.css";
import LoggedUserNavBar from "../../components/LoggedUserNavBar";
import CourseCard from "../../components/CourseCard";

export default function CourseDetail()
{
    return(
        <>
        <div className="home-full-screen">
            <div className="home-navBar">
                <LoggedUserNavBar/>
            </div>
            <div className="course-body-content">
                <CourseCard/>
            </div>
        </div>
        
        </>
    );
}