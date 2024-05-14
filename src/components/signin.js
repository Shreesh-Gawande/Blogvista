import React from 'react'
import "./signin_style.css";
export default function signin() {
  return (
    <div className='signin-container'>
      <div className="signin-center-cointaner">
        <div className="signin-left-cointaner">
            <div className="signin-heading"><h1>Sign In</h1></div>
        
            <div className="signin-form">
    <form>
        <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <br />
            <input type="text" id="fullname" placeholder="Enter Your full name"/>
        </div>
                
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
            <button className="signin-submit-button"type='submit'>Submit</button>
        </div>
    </form>
</div>

        </div>
        <div className="signin-right-cointaner"></div>
      </div>
    </div>
  )
}
