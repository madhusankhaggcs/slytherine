import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import '../styles/NavBar.css';
import { MdWindow } from "react-icons/md";

export default function AdminSideNav()
{
    return(
        <>
            <div className="teacher-dashboard-container">
                <div className="admin-side-nav-bar">
        
                    <ul>
                        <li className="side-nav-logo">eMaster</li>
                        <li className="admin-side-nav-item">
                            <MdWindow size={20}/>
                             dashboard 1
                        </li>
                        <li className="admin-side-nav-item">
                            <MdWindow size={20}/>
                            dashboard 2</li>
                        <li className="admin-side-nav-item">
                            <MdWindow size={20}/>
                            dashboard 3</li>
                        <li className="admin-side-nav-item">
                            <MdWindow size={20}/>
                            dashboard 4</li>
                    </ul>
            
                </div>
            <div className="teacher-dashboard-body-content">
              
                <AdminDashboardCard/>
            </div>
        </div>
        </>
    );
}