import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (

    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route index element={<HomePage />} />
        <Route path="/course_detail" element={<CourseDetail />} />
        
    </Routes>


  );
}

export default App;
