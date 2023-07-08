import React from 'react'
import '../styles/Navbar.css'
export default function Navbar(){
  const [show,setShow]=React.useState(false)
  const transitionNavBar=()=>{
    if(window.scrollY>100)
      setShow(true);
    else
      setShow(false)
  }
  React.useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar)
    return ()=>{
      window.removeEventListener('scroll',transitionNavBar)
    }
  },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <div className="nav-content">
        <img className='nav-logo' 
           src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
           className='nav-avatar' />
      </div>
      
    </div>
  )
}