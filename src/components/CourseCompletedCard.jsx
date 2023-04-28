import React, { useState } from "react";
import '../styles/ComponentStyles.css';

export default function CourseCompletedCard()
{

    const[completeCourseList, setCompleteCourseList] = useState([
        {title:'Python'},{title:'JAVA'},{title:'Database'}
    ])
    
    return(
     <>
     <div className="course-info-card">
        <center><h3>Courses Completed</h3></center> 
        {completeCourseList.map((data,id)=>(
            <div className="course-info-card-content">
                <h4>{data.title}</h4>
            </div>
        ))}
     </div>
     </>
    );
}