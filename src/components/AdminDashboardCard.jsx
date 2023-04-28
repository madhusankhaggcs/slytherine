import React, { useState } from "react";

export default function DashboardCard()
{

    const[dashboardCard, setDashboardCard] = useState([
        {icon: 'icon', title:'Total Users', count:28126},
        {icon: 'icon', title:'Total Students',count:526},
        {icon: 'icon', title:'Total Instructors',count:5826},
        {icon: 'icon', title:'Total Courses',count:58126},
        {icon: 'icon', title:'Total Payments',count:5834526}
    ])
    return(
     <>
     <div className="dashboard-card-container">
        {dashboardCard.map((data,id)=>(
        <div className="dashboard-card">
            <div className="dashboard-card-icon">{data.icon}</div>
            <div className="dashboard-card-title">
                {data.title} <br/>
                {data.count}
            </div>
        </div>
        ))}
     </div>
     </>
    );
}