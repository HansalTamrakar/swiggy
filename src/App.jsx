// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './Components/About';
import Error from './Components/Error';
import { Contact } from './Components/Contact';
import { RestaurantsMenu } from './Components/RestaurantsMenu';
import { Profile } from './Components/Profile';
// import { Instamarts } from './Components/Instamarts';
import { Suspense, lazy } from 'react';
import Shimmer from './Components/Shimmer';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import UserContext from './Components/utils/UserContext';
import store from './Components/utils/store';
import Cart from './Components/Cart';
 const Instamarts = lazy(()=>import("./Components/Instamarts"))
 const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Hansal",
    pass:123
  })
    return (
      <div className='applayout'>
        <Provider store={store}>
        <UserContext.Provider
        value={{
          user:user,
          setUser:setUser
        }}
        >
        <Header /> 
       <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>
      </div>
    )
  }

export const appRouter = createBrowserRouter([
 { 
  path:"/",
  element:<AppLayout />,
errorElement:<Error />,
children:[
    {
  path:"/",
  element:<Body />,

},
  {
  path:"about",
  element:<About />,
  children:[{
    path:"profile",
    element:<Profile />
  }]
},
{
  path:'/contact',
  element:<Contact />

},{
   path:'/restaurants/:id',
  element:<RestaurantsMenu />

},{
   path:'/instamarts',
  element:(<Suspense fallback={<h1>DOWn</h1>}>
   <Instamarts/>

   </Suspense>
   )
   


},
{path:"/cart",
element:<Cart />,
}
]
}])



export default AppLayout;
