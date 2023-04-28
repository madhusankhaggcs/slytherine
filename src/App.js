import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TeacherDashboard from "../src/components/TeacherSideNav";
import TeacherReg from './pages/TeacherReg';
import StudentReg from './pages/StudentReg';
import TeacherLogin from './pages/TeacherLogin';
import SignIn from './pages/SignIn';


import TeacherSignin from './pages/TeacherSignin';
import Signin from "./pages/Signin";
import CourseDetail from "./pages/CourseDetail";
import SingleCourse from "./pages/SingleCourse";
import TeacherReg from './pages/Registration/TeacherReg';
import StudentReg from './pages/Registration/StudentReg';
import TeacherSignin from './pages/Registration/TeacherSignin';
import Signin from "./pages/Registration/Signin";
import CourseDetail from "./pages/Courses/CourseDetail";
import SingleCourse from "./pages/Courses/SingleCourse";
import AdminSideNav from "./components/AdminSideNav";
import ShoppingCart from "./pages/Courses/ShoppingCart";
import UserCourseInfo from "./pages/Courses/UserCourseInfo";

function App() {
  return (

    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route index element={<HomePage />} />
        <Route path="/stu_reg" element={<StudentReg />} />
        <Route path='/signin' element={< SignIn />}/>
        <Route path="/teacher_login" element={<TeacherLogin />} />
        
        
        <Route path="/teacher_reg" element={<TeacherReg />} />
        <Route path="/teacher_signin" element={<TeacherSignin />} />
        <Route path="/student_reg" element={<StudentReg />} />
        <Route path="/admin_dash" element={<AdminSideNav />} />
        <Route path="/admin_side_nav" element={<AdminSideNav />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/course_detail" element={<CourseDetail />} />
        <Route path="/single_course" element={<SingleCourse />} />
        <Route path="/teacher_dash" element={<TeacherDashboard />} />
        <Route path="/shopping_cart" element={<ShoppingCart/>} />
        <Route path="/user_course_info" element={<UserCourseInfo/>} />
    </Routes>


  );
}

export default App;
