import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
  },
]);

const user=null;
export default function App(){
  return (
    <div className='app'>
          {!user ?(<LoginScreen/>):
          <RouterProvider router={router} />}
          
    </div>
  )
  }