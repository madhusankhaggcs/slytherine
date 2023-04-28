
import React, { useState } from "react";
import "../styles/NavBar.css"
// import plusIcon from '../resources/images/plu-icon.png'
import plusIcon from "../resources/images/course3.png";
import {BsFillPlusCircleFill} from "react-icons/bs";

export default function DashboardCard()
{

    const[dashboardCard, setDashboardCard] = useState([
        {icon: plusIcon, title:'Add Lesson'},
        {icon: plusIcon, title:'Add Video'},
        {icon: plusIcon, title:'Add Note'},
        {icon: plusIcon, title:'Add Lesson'}
    ]);

    return(
     <>
     <div className="dashboard-card-container">
        {dashboardCard.map((data,id)=>(
        <div className="dashboard-card">
            <div ><BsFillPlusCircleFill size={40} className="dashboard-card-icon"/></div>
            <div className="dashboard-card-title">{data.title}</div>
        </div>
        ))}
     </div>
     </>
    );
}

