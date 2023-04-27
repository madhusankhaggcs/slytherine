import React, {useState} from "react";
import "../../styles/InputFormStyles.css";
import NavBar from "../../components/NavBar";
import {Link} from 'react-router-dom';
import img from "../../resources/images/stu-signin.jpeg";





//Form Icons import
import { FaUserAlt, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Signin()
{     // Declare state variables for email and password input fields
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function handleSignin()
    {
        
    }

    return(
        <>
        <div className="home-full-screen">
            <div className="home-navBar">
                <NavBar/>
            </div>
            <div className="signin-body">
         
                <div className="signin-body-left">
                <img className="signin-body-right-img" src={img}></img>
                </div>
                
                
                       <div className="signin-body-form-right">
                    <h1 className="signin-title">Sign in</h1>
                    <ul>
                  
                        <li className="signin-body-form-input-list">
                            <GrMail size={20}/>
                            <input type="email" className="signin-username" 
                            placeholder="UserName"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} required/>
                        </li>
                        <li className="signin-body-form-input-list">
                            <RiLockPasswordFill size={20}/>
                            <input type="password" className="signin-username" 
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} required/>
                        </li>

                       
                        <li className="signin-body-form-input-list-checkbox">
                            <input type="checkbox"/>Remeber Me
                        </li>
                        <li> 
                            
                            <button type="submit" onClick={handleSignin} className="signin-body-form-input-list register-btn">Login</button>
                        </li>
                       
                        <li className="signin-body-form-input-list-social-btn">
                            <p className="signin-body-form-input-list-continue-with"> Continue With </p>
                            <div className="signin-form-social-media-btn-set" style={{marginRight:'40%'}}>
                                <FcGoogle size={20}/>
                                <AiFillTwitterCircle size={20}/>
                                <FaFacebook size={20}/>   
                            </div>
                          
                        </li>
                        <li className="signin-body-form-input-list-social-btn">
                            <Link to = '/student_reg'>
                                <button type="button" className="create-acc-btn">Create an account</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
        </>
        );
        
}