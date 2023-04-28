import React from "react";
import "../../styles/CourseStyles.css";
import NavBar from "../../components/NavBar";
import CourseVideo from '../../resources/videos/course_video.mp4';
import {AiFillStar} from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";


export default function SingleCourse()
{
    return(
        <>
        <div className="single-course-full-screen">
            <div className="home-navBar">
                <NavBar/>
            </div>
            <div className="single-course-detail">
                <div className="single-course-video-content">
                    <video className="course-video" controls>
                            <source src={CourseVideo} type="video/mp4"/>  
                                    Your browser does not support the video tag.
                        </video>
                </div>

                <div className="single-course-lec-material-content">
                    <h4 style={{textAlign:'center'}}>Lecture Material</h4>
                    <button className="lec-material-btn">Notes</button>
                    <button className="lec-material-btn">Short Note</button>
                    <button className="lec-material-btn">Reference Books</button>
                </div>

                <div className="single-course-feedback-content">
                    <div className="single-course-feeedback">
                        <h4>Feedback</h4>
                        <p>Type and Submit Here</p>
                        <VscFeedback size={60}/>
                    </div>
                    <div className="single-course-question-forum">
                        <h4>Ask Questions From Your Teacher</h4>
                        <p>Google Sheet</p>
                    </div>
                </div>
            </div>
            <div className="single-course-rate">
            <div className="single-course-rating-star-set">  
                <AiFillStar size={40}/><AiFillStar size={40}/><AiFillStar size={40}/><AiFillStar size={40}/><AiFillStar size={40}/>
                <br/>
                <p style={{color:'grey'}}>Give Review</p>
            </div>
            </div>
        </div>
        </>
    );
}