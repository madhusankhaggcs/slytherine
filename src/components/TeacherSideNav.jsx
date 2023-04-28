import React from "react";
import DashboardCard from "./TeacherDashboardCard";
import '../styles/NavBar.css';
import { BsPersonCircle} from "react-icons/bs";
import { FiLogOut} from "react-icons/fi";
import { MdWindow,MdOutlineForum} from "react-icons/md";
import {BiDollarCircle } from "react-icons/bi";
import {FaGraduationCap} from "react-icons/fa";

export default function TeacherSideNav()
{
    return(
        <>
        <div className="teacher-dashboard-container">
            <div className="side-nav-bar">
       
                <ul>
                    <li className="side-nav-logo">eMaster</li>
                    <li className="side-nav-item">
                       <MdWindow size={30}/> dashBoard</li>
                    <li className="side-nav-item">
                       <MdOutlineForum size={30}/> forums</li>
                    <li className="side-nav-item">
                       <BiDollarCircle size={30}/> earnings</li>
                    <li className="side-nav-item">
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
                <DashboardCard/>
            </div>
        </div>
        </>
    );
}