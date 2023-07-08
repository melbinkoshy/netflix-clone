import React from 'react'
import './LoginScreen.css'
import SigninScreen from './SigninScreen'
function LoginScreen() {
  const [signIn,setSignIn]=React.useState(false)
  return (
   
    <div className='loginScreen'>
      
      <div className="login-screen-background">
        <img className='login-screen-logo' 
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt=''/>
        <button onClick={()=>setSignIn(true)}className='login-screen-button'>
          Sign In
        </button>
      </div>
       
      <div className="loginScreen-gradient"></div>
      {signIn?<SigninScreen/>:<div className="body-container">
      <div className="loginScreen-body">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
        <div className="loginScreen-input">
          <form action="">
            <input type="email" placeholder='Email address'/>
            <button onClick={()=>setSignIn(true)} className='get-started-button'>Get Started 	&#62;</button>
          </form>
          
        </div>
      </div>
      </div>}
      
      
    </div>
  )
}

export default LoginScreen
