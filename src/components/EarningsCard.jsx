import React, { useState } from "react";
import '../styles/ComponentStyles.css';

export default function EarningsCard()
{

    const[earning, setEarning] = useState(12000)
    
    return(
     <>
     <div className="teacher-dah-course-card">
        <center>
            <h3>Your Total Earnings</h3>
            <h4>Rs. {earning}</h4>
        </center> 
     </div>
     </>
    );
}