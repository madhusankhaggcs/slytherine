import React from "react";
import "../styles/HomePage.css";
import AdminDashboardCard from '../../components/AdminDashboardCard'

export default function AdminDashboard()
{
    return(
        <>
            <div className="teacher-dashboard-content">
                <AdminDashboardCard/>
            </div>
        </>
    );
}