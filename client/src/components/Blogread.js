import React, { useEffect } from "react";
import { useState } from "react";

const Blogread = ({ match }) => {
  const [userData, setUserData] = useState({});

  const callAboutPage = async (id) => {
    try {
      const res = await fetch(`/blogpost/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container-fluid mx-5">
      <div className="row">
        <div className="col-11 my-2">
          <div className="card car_height">
            <form method="GET">
              <img
                src="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top img_height w-50"
                alt=".."
              />
              <div className="card-body">
                {userData && (
                  <h5 className="card-title car_title py-0 my-0">
                    {userData.title}
                  </h5>
                )}
                {userData && (
                  <p className="card-text fs-6 my-2">
                    {userData.description}
                  </p>
                )}
                {userData && (
                  <p className="card-text fs-6 my-2">
                    {userData.content}
                  </p>
                )}
                {userData && (
                  <h5 className="card-title my-0 py-0 text-center">
                    {userData.author}
                  </h5>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogread;
