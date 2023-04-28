import React from "react";
import DashboardCard from "./TeacherDashboardCard";
import MyCoursesCard from "./MyCoursesCard";
import EarningsCard from "./EarningsCard";
import DashboardForum from "./DashboardForum";
import '../styles/NavBar.css';
import { BsPersonCircle} from "react-icons/bs";
import { FiLogOut} from "react-icons/fi";
import { MdWindow,MdOutlineForum} from "react-icons/md";
import {BiDollarCircle } from "react-icons/bi";
import {FaGraduationCap} from "react-icons/fa";
import { useState } from "react";

export default function TeacherSideNav()
{
    const [sideNavLogic,setSideNavLogic] = useState(0);
     
    return(
        <>
        <div className="teacher-dashboard-container">
            <div className="side-nav-bar">
       
                <ul>
                    <li className="side-nav-logo">eMaster</li>
                    <li className="side-nav-item" onClick={(e)=>{setSideNavLogic(0)}}>
                       <MdWindow size={30}/> dashBoard</li>
                    <li className="side-nav-item" onClick={(e)=>{setSideNavLogic(3)}}>
                       <MdOutlineForum size={30}/> forums</li>
                    <li className="side-nav-item" onClick={(e)=>{setSideNavLogic(2)}}>
                       <BiDollarCircle size={30}/> earnings</li>
                    <li className="side-nav-item" onClick={(e)=>{setSideNavLogic(1)}}>
                       <FaGraduationCap size={30}/> my courses</li>
                    <li className="side-nav-item-logout">
                        <FiLogOut size={30}/>
                    </li>
                </ul>
        
            </div>
            <div className="teacher-dashboard-body-content">
                <div className="teacher-dashboard-body-user-bar">
                    <BsPersonCircle size={30} className="teacher-dashboard-body-user-icon"/>
                </div>
                {sideNavLogic===0 && <DashboardCard/>}
                {sideNavLogic===1 && <MyCoursesCard/>}
                {sideNavLogic===2 && <EarningsCard/>}
                {sideNavLogic===3 && <DashboardForum/>}
            </div>
        </div>
        </>
    );
}