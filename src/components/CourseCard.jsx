import React, {useState} from "react";
import '../styles/ComponentStyles.css';

export default function CourseCard()
{
    const[tagLogic, setTagLogic]= useState(0);

    const [popularCourse, setPopularCourse] = useState([
        {
            courseID: '0001',
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'Python Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
            courseTitle:'JAVA Programming',
            teacherID: '#0001',
            courseImgUrl: '',
            teacherName:'Perera MRS',
            courseFee: '1200',
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
       {title:'DevOps'},{title:'Cloud Computing'},{title:'JAVA'},{title:'Database'}
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
        </div>
        {tagLogic===0 && (  
        <div className="course-card-container">
            
            {popularCourse.map((data, id) => (  
            <div>
            <div className="course-card-content">
                <div className="course-card-img-content">
                    <img src="" alt="" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                        {data.courseRate}
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
                            <li>{item}</li>
                        ))}
                    </ul>
                    <button>ADD TO CART</button>
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
                    <img src="" alt="" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                    {data.courseRate}
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
                     <li>{item}</li>
                 ))}
             </ul>
             <button>ADD TO CART</button>
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
                    <img src="" alt="" className="course-card-img" />
                </div>
                <div className="course-card-detail-content">
                    <h3 className="course-card-title">{data.courseTitle}</h3>
                    <p className="course-card-teacher">{data.teacherName}</p>
                    <div className="course-card-rating-content">
                    {data.courseRate}
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
                            <li>{item}</li>
                        ))}
                    </ul>
                    <button>ADD TO CART</button>
            </div>
            </div>
            ))}
        </div>
        )}
        <div>   <h3>You Can Also Learn</h3>
            <div className="related-course-card">
             
               {relatedCourses.map((data,id)=>( <h3 className="related-course-card-title">
                {data.title}
               </h3>))}
            </div>
        </div>
        </>
    );
}