import React, {useState} from "react";
import '../styles/ComponentStyles.css';
import { Link } from "react-router-dom";
import courseImg1 from "../resources/images/course1.jpg";
import courseImg2 from "../resources/images/course2.jpg";
import courseImg3 from "../resources/images/course3.png";
import {AiFillStar} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export default function CourseCard()
{
    const[tagLogic, setTagLogic]= useState(0);

    const [popularCourse, setPopularCourse] = useState([
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg1,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '5/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        }, 
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg2,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '4/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg3,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '3/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },
        {
            courseID: '0001',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg2,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '4/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },

    ])
    const [trendingCourse, setTrendingCourses] = useState([
      
        {
            courseID: '0002',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg1,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '3/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },
        {
            courseID: '0002',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg2,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '4/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },

    ])
    const [newCourse, setNewCourse] = useState([
      
        {
            courseID: '0003',
            courseTitle:'JAVA Programming',
            teacherID: '#0001',
            courseImgUrl: courseImg3,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '3/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },
        {
            courseID: '0003',
            courseTitle:'Learn python the complete python programming lesson',
            teacherID: '#0001',
            courseImgUrl: courseImg1,
            teacherName:'Perera MRS',
            courseFee: 'Rs'+'1200',
            courseRate: '4/5',
            duration:'14h grade 11',
            description:'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
            features: [
                'Create their own Python Programs',
                'Become an experienced Python Programmer',
                'Parse the Web and Create their own Games', ]
        },

    ])
    const [relatedCourses, setRelatedCourses] = useState([
       {title:'DevOps'},{title:'Cloud Computing'},{title:'JAVA'},{title:'Database'},{title:'DevOps'},{title:'Cloud Computing'},{title:'Database'},{title:'DevOps'},{title:'Cloud Computing'},
    ])


    return(
        <>
     <div className="course-container-tab-bar">
            <button className="course-container-tab-bar-btn"
            onClick={(e)=>{setTagLogic(0)}}>Popular</button>
            <button className="course-container-tab-bar-btn"
             onClick={(e)=>{setTagLogic(1)}}>Trending</button>
            <button className="course-container-tab-bar-btn"
             onClick={(e)=>{setTagLogic(2)}}>New</button>
             <hr style={{marginLeft:'20px'}}/>
        </div>
        {tagLogic===0 && (  
        <div className="course-card-container">
            
            {popularCourse.map((data, id) => (  
            <div>
            <div className="course-card-content">
                <div className="course-card-img-content">
                    <img src={data.courseImgUrl} alt="course 1" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                        {data.courseRate}
                      <div className="rating-star-set">  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                    </div>
                    <p className="course-card-price">{data.courseFee}</p>
                </div>
            </div>
            <div className="course-card-description-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.duration}</p>
                    <p className="course-card-price">{data.description}</p>
                    <ul>
                        {data.features.map((item,id)=>(
                            <li style={{listStyle:'circle'}}>{item}</li>
                        ))}
                    </ul>
                    <Link to="/single_course"><button className="course-card-add-to-cart-btn">ADD TO CART <BsFillCartFill size={20}/></button></Link> 
            </div>
            </div>
            ))}
        </div>
        )}
        {tagLogic===1 && (  
        
        <div className="course-card-container">
            
            {trendingCourse.map((data, id) => (  
            <div>
            <div className="course-card-content">
                <div className="course-card-img-content">
                    <img src={data.courseImgUrl} alt="Course Image" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                    {data.courseRate} 
                    <div className="rating-star-set">  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                    </div>
                    <p className="course-card-price">{data.courseFee}</p>
                </div>
            </div>
             <div className="course-card-description-content">
             <h3 className="course-card-title">{data.courseTitle}</h3>
             <p className="course-card-teacher">{data.duration}</p>
             <p className="course-card-price">{data.description}</p>
             <ul>
                 {data.features.map((item,id)=>(
                     <li style={{listStyle:'circle'}}>{item}</li>
                 ))}
             </ul>
             <Link to="/single_course"><button className="course-card-add-to-cart-btn">ADD TO CART <BsFillCartFill size={20}/></button></Link> 
     </div>
     </div>
            ))}
        </div>
        )}
        {tagLogic===2 && (  
        <div className="course-card-container">
            
            {newCourse.map((data, id) => (  
                <div>
            <div className="course-card-content">
                <div className="course-card-img-content">
                    <img src={data.courseImgUrl} alt="Course Image" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                    {data.courseRate} 
                    <div className="rating-star-set">  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                    </div>
                    <p className="course-card-price">{data.courseFee}</p>
                </div>
            </div>
            <div className="course-card-description-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.duration}</p>
                    <p className="course-card-price">{data.description}</p>
                    <ul>
                        {data.features.map((item,id)=>(
                            <li style={{listStyle:'circle'}}>{item}</li>
                        ))}
                    </ul>
                   <Link to="/single_course"><button className="course-card-add-to-cart-btn">ADD TO CART <BsFillCartFill size={20}/></button></Link> 
            </div>
            </div>
            ))}
        </div>
        )}
        <div>   <h3>You Can Also Learn</h3>
        
            <div className="related-course-content">
             
               {relatedCourses.map((data,id)=>( 
                <div className="related-course-card">
                    <h3 className="related-course-card-title">
                        {data.title}
                    </h3>
                </div>))}
            </div>
        </div>
        </>
    );
}