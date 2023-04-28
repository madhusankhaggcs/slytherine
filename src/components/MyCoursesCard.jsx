import React, { useState } from "react";
import '../styles/ComponentStyles.css';

export default function MyCoursesCard()
{

    const[uploadedCount, setUploadedCount] = useState(450)
    const[totalViewers, setTotalViewers] = useState(11380)
    return(
     <>
  
        <div className="teacher-dah-course-card">
            <center>
                <h3>Uploaded Courses</h3>
                <p>{uploadedCount}</p>
                <h3>Total Viewers</h3>
                <p>{totalViewers}</p>
            </center>
            

        </div>

     </>
    );
}