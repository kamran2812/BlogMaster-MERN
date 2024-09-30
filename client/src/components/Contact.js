import React, { useEffect} from "react";
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [userData, setUserData]=useState({name:"",email:"",phone:"",message:""});
    // const navigate  =  useNavigate();
const callAboutPage = async()=>{
   try {
	 const res = await  fetch('/getdata', {
	        method: 'GET',
	        headers: {
	          'Content-Type': 'application/json'
	        }
	      })
          const data = await res.json();
        //   console.log(data)
          setUserData({...userData, name: data.name, email:data.email,phone:data.phone,message:data.message})
          if(!res.status === 200){
            const error =  new Error(res.error)
            throw error

          }
} catch (error) {
    console.log(error)
}
}
    useEffect(()=>{
        callAboutPage()
    },[])
// store data in states 
    const handleInputs =(e)=>{
        const name = e.target.name
        const value = e.target.value

        setUserData({...userData, [name]:value})
    }
    // senddata to database 
    const contactForm = async(e)=>{
      e.preventDefault();
        const {name, email, phone, message}=userData
        const res = await fetch('/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name, email, phone, message
            }),
          
          });
          const data = await res.json();
          if(res.status === 422 || !data){
            alert("message not send")
          }else{
            alert("message send")
            setUserData({...userData, message:""})
          }
    }
  return (
    <>
      <div className="contact_info pt-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="row">
                        <div className="col-md-4 col-12 my-md-0 my-2">
                          <div className="card py-0 my-0">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-phone-alt fa-lg mx-2"></i>
                              <span className="card-title">Phone</span>
                              <p className="card-text py-1 my-1 ms-3">(+92) 301-1045056</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card py-0 my-0">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-envelope fa-lg mx-2"></i>
                              <span className="card-title">Email</span>
                              <p className="card-text py-1 my-1 ms-3 ">war3point0@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card py-0 my-0">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-address-card fa-lg mx-2"></i>
                              <span className="card-title py-0 my-0">Address</span>
                              <p className="card-text py-1 my-1 ms-3">lahore, PK</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-5 offset-lg-2">
                    <div className="row">
                    <div className="card px-sm-5 px-2 pt-5">
                        <h1 className='contact_touch'>Get In Touch</h1>
                          <div className="card-body py-4 my-0">
                            <form method="POST">
                            <div className='row'>
                          <div className="col-md-4 col-12 my-md-0 my-2">
                          <input type="text" className="form-control py-3" name="name" value={userData.name} onChange={handleInputs} placeholder="Your name" aria-label="Your name"/>
                          </div>
                          <div className="col-md-4 col-12 my-md-0 my-2">
                          <input type="text" className="form-control py-3" name="email" value={userData.email} onChange={handleInputs} placeholder="Your email" aria-label="Your email"/>
                          </div>
                          <div className="col-md-4 col-12 my-md-0 my-2">
                          <input type="number" className="form-control py-3" name="phone" value={userData.phone} onChange={handleInputs} placeholder="Your phone number" aria-label="Your phone number"/>
                          </div>
                          <div className="col-12 py-4">
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" name="message" value={userData.message} 
                          onChange={handleInputs}
                           placeholder="Message"></textarea>
                          <button type="submit" onClick={contactForm} className="btn btn-outline-dark my-3">Send Message</button>
                          </div>

                          </div>
                          </form>
                        </div>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Contact
