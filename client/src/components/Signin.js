import React from 'react'
import {Link} from 'react-router-dom';
// import reg from "../images/reg.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate  =  useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const userLogin = async(e)=>{
        e.preventDefault();

        const res = await fetch("/login",{
            method:"POST",
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = res.json();
        if(res.status === 400|| !data){
            window.alert("Invalid Sign In")
            console.log("Invalid Sign In")
          }else{
           
            window.alert("valid Sign In")
            console.log("valid Sign In")
            navigate("/", { replace: true });
        }
        
    }
  return (
    <>
    <div className="body">
    <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    <section>
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form method='POST'>
                    <h2>Sign In</h2>
                    {/* <div className="social-container">
                        <a href="https://Github.com/YasinDehfuli" target="_blank" className="social"><i className="fab fa-github"></i></a>
                        <a href="https://Codepen.io/YasinDehfuli" target="_blank" className="social"><i className="fab fa-codepen"></i></a>
                        <a href="mailto:Ydehfuli@gmail.com" target="_blank" className="social"><i className="fab fa-google"></i></a>
                    </div> */}
                    <span className='subhead'>Socrates World</span>
                    <label>
                        <input type="email" name='name'  placeholder="Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <input type="password" name='password' placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </label>
                    <button type='submit' className='buttoni' onClick={userLogin} >Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    
                    <div className="overlay-panel overlay-right">
                        <h2>Create, Account!</h2>
                        <p>Sign up if you still don't have an account </p>
                        <Link to="/signup" role="button" aria-pressed="true"><button className="ghost buttoni" id="signUp"> Sign Up </button></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
 
    </>
  );
};
export default Signin;

