import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TeacherDashboard from "../src/components/TeacherSideNav";
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
        <Route path="/teacher_reg" element={<TeacherReg />} />
        <Route path="/teacher_signin" element={<TeacherSignin />} />
        <Route path="/student_reg" element={<StudentReg />} />
        <Route path="/admin_dash" element={<AdminSideNav />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shopping_cart" element={<ShoppingCart/>} />

        <Route path="/course_detail" element={<CourseDetail />} />
        <Route path="/single_course" element={<SingleCourse />} />
        <Route path="/user_course_info" element={<UserCourseInfo/>} />

        <Route path="/admin_side_nav" element={<AdminSideNav />} />
        <Route path="/teacher_dash" element={<TeacherDashboard />} />

    </Routes>
  );
}

export default App;


// NavBar Logo -> Home Page
// NavBar Home -> Home Page
// NavBar AboutUs -> Home Page
// NavBar Grade -> Grade Select
// NavBar Login -> Login Page
// NavBar Signup -> Stu Reg
// NavBar Cart Icon -> Shopping Cart
// NavBar Teach With Us -> Get Started
// NavBar - Logged User -> User Icon -> Course Info
// Get Started Btn -> Teacher Reg
// Grade -> Last SubMenu Grade Select -> Course Detail Page
// Course Detail, Add To Cart Button -> Single Course



