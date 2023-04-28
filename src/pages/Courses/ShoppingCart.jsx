import React from "react";
import "../../styles/HomePage.css";
import "../../styles/ComponentStyles.css";
import LoggedUserNavBar from "../../components/LoggedUserNavBar";
import ShoppingCartCard from "../../components/ShoppingCartCard";

export default function ShoppingCart()
{
    return(
        <>
        <div className="home-full-screen">
            <div className="home-navBar">
                <LoggedUserNavBar/>
            </div>
            <div className="course-body-content">
            <h2 style={{paddingLeft:'2rem'}}>Shopping Cart</h2>
            <p style={{paddingLeft:'2rem'}}>Courses In Cart</p>
            <hr style={{marginLeft:'2rem'}}/>
                <ShoppingCartCard/>
            </div>
        
            <div className="shopping-cart-card-checkout">
                <button className="shopping-cart-card-checkout-btn">Checkout</button>
            </div>
        </div>
        
        </>
    );
}