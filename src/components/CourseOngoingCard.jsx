import React, { useState } from "react";
import '../styles/ComponentStyles.css';

export default function CourseOngoingCard()
{

    const[ongoingCourseList, setOngoingCourseList] = useState([
        {title:'Calculus'},{title:'Networking'},{title:'Storage'}
    ])
    
    return(
     <>
     <div className="course-info-card">
        <center><h3>Courses Ongoing</h3></center> 
        {ongoingCourseList.map((data,id)=>(
            <div className="course-info-card-content" style={{backgroundColor:'#7AAFD0'}}>
                <h4>{data.title}</h4>
            </div>
        ))}
     </div>
     </>
    );
}