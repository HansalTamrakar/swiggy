import './Body.css'
import React, { useContext } from 'react';
import { useState,useEffect } from 'react'
import {restaurantList} from './Constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from './utils/useFilter';
import {useOnline} from './utils/useOnline';
import UserContext from './utils/UserContext';


  const RestaurantCard=({title,price,category,image,rating})=>{
    const {user} = useContext(UserContext)
    return(
    <div className=' min-h-128 mt-3 bg-black text-white w-80 ml-14 text-center font-mono border border-white text-l'>
      <img className='h-80 w-full  border   border-black'alt="no"src={image} />
        <h1 className='mt-5'>{category}</h1>
        {/* <h1>{title}</h1> */}
      <h1>{user.name}</h1>
      <h1>{price}</h1>
      <h1>rating:{rating.rate}</h1>
    
     
      <button className='border border-white p-1 font-sans bg-green-700 mt-9 '>Buy Now</button>

    </div>
    )

  }
const Body = () => {
  const[search,setSearch]=useState();
//   const[searchClick,setSearchClick]=useState("true");

const [Allrestaurants,setAllrestaurants]= useState([]);
const [filteredrestaurants,setfilteredrestaurants]= useState(Allrestaurants);
const {user,setUser} = useContext(UserContext)
useEffect(()=>{
  getRestaurant()
},[])

async function getRestaurant(){
  const data =await fetch(" https://fakestoreapi.com/products/")
  const json = await data.json()
  console.log(json)
  setAllrestaurants(json)
  setfilteredrestaurants(json)
};
const isOnline =useOnline();
if(!isOnline) return <h1>'YOU ARE OFF LINE'</h1>; 
 if(!Allrestaurants) return null;
//  if(filteredrestaurants.length===0) return <h1>No resaturant </h1>;
 
    return (Allrestaurants.length ===0)?<Shimmer/>:(
      

        <>
       
        <div className="bg-violet-200 h-16 text-right">
            <input className="h-8 mt-4 m-4 border-2 border-sky-500 "
            type="text" 
         
            placeholder='Search'
            onChange={(e)=>{
setSearch(e.target.value)
            }} />
            
            
            <button className=' mt-4 m-4 border-2 bg-black rounded-xl h-10 pl-2 pr-2 text-white hover:bg-blue-600 font-serif' onClick={()=>{
                // if(searchClick==="true"){
                //     setSearchClick("false")
                // }
                // else{
                //     setSearchClick("true")
                // }
               const data= filterData(search,Allrestaurants);
               setfilteredrestaurants(data)
            }}>Search</button>
            <input value={user.name} 
            onChange={(e)=>{setUser({
              name:e.target.value,
              email:"newemaik.com"
            })}} />
        </div>
      <div className="flex flex-wrap flex-start">
        
        {
          filteredrestaurants.map((restaurant)=>{
            
            return <Link to='/about'><RestaurantCard {...restaurant}/>
            </Link>
          })
          }
        
        
      </div>
      </>
    )
  }
  export default Body;