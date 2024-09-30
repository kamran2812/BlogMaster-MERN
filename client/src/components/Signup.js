import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    if (password !== cpassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    const res = await fetch('/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      alert('Valid Registration');
      console.log('Valid Registration');
      navigate('../signin', { replace: true });
    }
  };

  return (
    <>
 <div className="body">
    <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    <section>
        <div className="container" id="container">
            <div className="row form-container sign-in-container">
                <form method='POST'>
                    <div className='col-12'>
                    <h2>Sign Up</h2>
                    {/* <div className="social-container">
                        <a href="https://Github.com/YasinDehfuli" target="_blank" className="social"><i className="fab fa-github"></i></a>
                        <a href="https://Codepen.io/YasinDehfuli" target="_blank" className="social"><i className="fab fa-codepen"></i></a>
                        <a href="mailto:Ydehfuli@gmail.com" target="_blank" className="social"><i className="fab fa-google"></i></a>
                    </div> */}
                    <span className='subhead'>Socrates World</span>
                    <label>
                        <input type="text" name='name' placeholder="Name"
                        value={user.name}
                        onChange={handleInputs}
                        />
                    </label>
                    <label>
                        <input type="text" name='email' value={user.email}
                        onChange={handleInputs} placeholder="Email"/>
                    </label>
                    <label>
                        <input type="number" name='phone' value={user.phone}
                        onChange={handleInputs} placeholder="Phone"/>
                    </label>
                    <label>
                        <input type="text" name='work' value={user.work}
                        onChange={handleInputs} placeholder="Work"/>
                    </label>
                    <label>
                        <input type="password" name='password' value={user.password}
                        onChange={handleInputs} placeholder="Password"/>
                    </label>
                    <label>
                        <input type="password" name='cpassword' value={user.cpassword}
                        onChange={handleInputs} placeholder="Confirm Password"/>
                    </label>
                    <button type="submit" value="Sign Up" name="signup" className='buttoni' onClick={postData}>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className='col-lg-6 col-12'>
            <div className="overlay-container">
                <div className="overlay">
                    
                    <div className="overlay-panel overlay-right">
                        <h2>Sign In </h2>
                        <p>Sign in here if you already have an account </p>
                        <Link to="/signin" role="button" aria-pressed="true"><button className="ghost buttoni" id="signUp"> Sign In </button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  </div>



    </>
  )
}

export default Signup
