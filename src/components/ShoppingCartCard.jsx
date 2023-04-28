import React, {useState} from "react";
import '../styles/ComponentStyles.css';
import course1 from "../resources/images/course1.jpg"
import course2 from "../resources/images/course2.jpg"
import course3 from "../resources/images/course3.png"

export default function ShoppingCartCard()
{
    const [course, setCourse] = useState([
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: course1,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '5/5',
            totalFee: 'Rs'+'1200',
        }, 
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: course2,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '5/5',
            totalFee: 'Rs'+'1500',
        }, 
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: course3,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '5/5',
            totalFee: 'Rs'+'1500',
        }, 
    ])

    return(
        <>
          {course.map((data, id) => (  
            <div className="shopping-cart-card-container">
                <div className="shopping-cart-card-course-img-content">
                    <img src={data.courseImgUrl} className="shopping-cart-card-course-img"/>
                </div>
                <div className="shopping-cart-card-course-detail">
                    <p>{data.courseTitle}</p>
                    <p>{data.teacherName}</p>
                    <p>{data.courseRate}</p>
                </div>
                <div className="shopping-cart-card-course-price">
                    {data.courseFee}
                </div>
                <div className="shopping-cart-card-course-total-price">
                    {data.totalFee}
                </div>
            </div>
          ))}
        </>
    );
}