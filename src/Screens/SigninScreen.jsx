import React from 'react'
import './SigninScreen.css'
function SigninScreen() {
  return (
    <div className='signin-container'>
      <div className='signIn-screen'>
      <h1>Sign In</h1>
      <form>
        
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit'>Sign In</button>
        <h4></h4>
      </form>
    </div>
    </div>
    
  )
}

export default SigninScreen
