import React from 'react'
import "./login-style.css"
export default function login() {
  return (
    <div className='login-cointaner'>
      <div className="login-center-cointaner">
        <div className="login-left-cointaner">
            <div className="login-left-cointaner-heading">
                <h1>Welcome Back!</h1>  
            </div>
            <div className="login-left-cointaner-parragraph">
            <p>Not a member yet? Join out community for the exclusive bloging content creation and consumption</p>
            </div>
            <div className="login-left-cointaner-button">
                <button className="login-left-cointaner-button-button">Get Started</button>
            </div>
        </div>
        <div className="login-right-cointaner">
            <div className="login-heading">
                <h1>Login</h1>
            </div>
            <div className="login-form">
                <form>
               
                
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" placeholder="Enter Your email"/> 
        </div>
                
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" placeholder="Enter Password"/>
        </div>

        <div className="form-group">
            <button className="login-submit-button"type='submit'>Submit</button>
        </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
