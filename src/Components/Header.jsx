import Title from "./Title";
import './Header.css' 
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnline } from "./utils/useOnline"; 
import {React,useContext} from 'react';
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import store from "./utils/store";

export const Header = () => {
  const [login,setlogin]=useState(false);
  
  const isOnline=useOnline();
  const {user} = useContext(UserContext)

  const cartItems=useSelector(store => store.cart.items)
  console.log(cartItems)
  return(
    <div className="flex pl-10 pr-10 justify-between align-middle self-center bg-orange-100">
      <Title />
      
      <div className="flex align-middle self-center">
        <div className="pl-3 pr-3 font-serif text-2xl">
        <Link to='/body'>
        <div>Home</div>
        </Link>
        </div>
        <div className="pl-3 pr-3 font-serif text-2xl">      
         <Link to='/about'>
        <div>About</div>
        </Link>
        </div>
        
       <div className="pl-3 pr-3 font-serif text-2xl">      
        <Link to='/contact'>
        <div>Contacts</div>
        </Link>
        </div>
       <div className="pl-3 pr-3 font-serif text-2xl">
        <Link to='/instamarts'>
        Instamarts
        </Link>
        </div>
        <div className="pl-3 pr-3 font-serif text-2xl">
        <Link to='/cart'>
        <div>Cart{cartItems.length} items</div>
        </Link>
        </div>
       
        

       
      </div>
<div className="align-middle self-center font-serif" >{isOnline?<h1>Yes He is Online</h1>:<h1>NOT ONLINE</h1>}</div>
<div className="self-center font-mono font-bold text-red-400 text-3xl ">{user.name}</div>
      <div className="align-middle self-center font-serif"> {login?<button className='login' onClick={()=>{
        setlogin(false)
      }}>Log Out</button>:<button className="bg-green-600 pl-5 pr-6 w-24 h-8 m self-center font-serif"  onClick={()=>{
        setlogin(true)

      }}>Log In</button>}</div>
      
    </div>
)
  }

  export default Header;