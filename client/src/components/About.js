import React, { useEffect} from "react";
import { useState } from 'react';
import aboutimg from "../images/kamidp.jpg";
import { useNavigate } from "react-router-dom";


const About = () => {
    const [userData, setUserData]=useState({});
    const navigate  =  useNavigate();
const callAboutPage = async()=>{
   try {
	 const res = await  fetch('/about', {
	        method: 'GET',
	        // body: JSON.stringify({
	        //     name, email,phone,work,password,cpassword 
	        // }),
	        headers: {
	          'Content-Type': 'application/json'
	        }
	      })
          const data = await res.json();
        //   console.log(data)
          setUserData(data)
          if(!res.status === 200){
            const error =  new Error(res.error)
            throw error

          }
} catch (error) {
    console.log(error)
	navigate("../signin", { replace: true });
}
}
    useEffect(()=>{
        callAboutPage()
    })
  return (
    <>
      <div className="container-fluid">
        <form method="GET">
          <div className="row">
            <div className="col-lg-8 my-3 offset-lg-2 ">
              <div className="row">
                <div className="card px-sm-5 px-2 pt-3">
                  <div className="card-body pt-3 my-0">
                    <div className="row">
                      <div className="col-md-4 col-12 my-md-0 my-2">
                        <img
                          src={aboutimg}
                          alt="aboutimg"
                          className="img_height2"
                        />
                      </div>
                      <div className="col-md-6 col-12 my-md-0 my-2">
                        <div className="profile_head">
                        {userData && <h5 className=" fs-4">{userData.name}</h5>}

                          {userData && <h6 className="  mt-2">{userData.work}</h6>}
                          <p className="profile-rating mt-4 fs-5 fw-bold">
                            RANKING <span className="fs-6 fw-bold">1/10</span>
                          </p>

                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Home
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Profile
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2 col-12 my-md-0 my-2">
                        <input
                          type="submit"
                          value="Edit Profile"
                          name="btnAddMore"
                          className="btn btn-outline-dark mt-3"
                        />
                      </div>

                      <div className="row my-3">
                        {/* left link  */}
                        <div className="col-md-4">
                          <div className="profile-work">
                            <h5>Work Links</h5>
                            <a href="#" role="button" aria-pressed="true">
                              Facebook
                            </a>
                            <br />
                            <a href="#" role="button" aria-pressed="true">
                              Instagram
                            </a>
                            <br />
                            <a href="#" role="button" aria-pressed="true">
                              Linkdin
                            </a>
                            <br />
                            <a href="#" role="button" aria-pressed="true">
                              Github
                            </a>
                            <br />
                            <a href="#" role="button" aria-pressed="true">
                              Whats app
                            </a>
                            <br />
                            <a href="#" role="button" aria-pressed="true">
                              Youtube
                            </a>
                            <br />
                          </div>
                        </div>
                        <div className="col-md-8">
                          
                          <div className="tab-content">
  <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">User</label>
                                </div>
                                <div className="col-md-6">
                                {userData && <p className="fs-6 fw-bold">{userData._id}</p>}
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6 ">
                                  <label className="fs-5 fw-bold">Name</label>
                                </div>
                                <div className="col-md-6 ">
                                 {userData && <p className="fs-6 fw-bold">{userData.name}</p>}
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">Email</label>
                                </div>
                                <div className="col-md-6">
                                {userData && <p className="fs-6 fw-bold">{userData.email}</p>}
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">Phone</label>
                                </div>
                                <div className="col-md-6">
                                {userData && <p className="fs-6 fw-bold">{userData.phone}</p>}
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">
                                    Profession
                                  </label>
                                </div>
                                <div className="col-md-6">
                                {userData && <p className="fs-6 fw-bold">{userData.work}</p>}
                                </div>
                              </div>
  </div>
  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">User</label>
                                </div>
                                <div className="col-md-6">
                                  <p className="fs-6 fw-bold">
                                    23843458454983754
                                  </p>
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6 ">
                                  <label className="fs-5 fw-bold">Name</label>
                                </div>
                                <div className="col-md-6 ">
                                  <p className="fs-6 fw-bold">Usama Yousuf</p>
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">Email</label>
                                </div>
                                <div className="col-md-6">
                                  <p className="fs-6 fw-bold">
                                    Usama@gmail.com
                                  </p>
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">Phone</label>
                                </div>
                                <div className="col-md-6">
                                  <p className="fs-6 fw-bold">+923056285687</p>
                                </div>
                              </div>

                              <div className="row my-1">
                                <div className="col-md-6">
                                  <label className="fs-5 fw-bold">
                                    Profession
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <p className="fs-6 fw-bold">Web Developer</p>
                                </div>
                              </div>
  </div>
  
</div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
