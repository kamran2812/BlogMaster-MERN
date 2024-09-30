// import React, { useEffect} from "react";
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import aboutimg from "../images/kamidp.jpg";
// // import { useNavigate } from "react-router-dom";
// const Card = (props) => {
//   const [posts, setPosts] = useState([]);

//   const callAboutPage = async()=>{
//     try {
//       const res = await fetch('/cards', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await res.json();
//       setPosts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(()=>{
//     callAboutPage();
//   }, []);
//   const postsArray = Array.isArray(posts) ? posts : [posts];
//   return (
//     <>
//     {postsArray.map((post) => (
//       <div class="col-md-3 col-12 my-2 " >
//     <form method="GET">
//           <div class="card car_height "  >
//             <img src="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top img_height" alt="..." />
//             <div class="card-body">
//             <p class="card-category text-center py-0 my-1">philosophy</p>
           
//               {posts && <h5 class="card-title car_title py-0 my-0">{posts.title}</h5>}
//               {posts && <p class="card-text fs-6 my-2">{posts.description}</p>}
//               <Link to="/" role="button" aria-pressed="true"><button className="btn btn-outline-dark mt-2" id="addPost">Read More</button></Link>
//               {posts &&<h5 class="card-title my-0 py-0 text-center">{posts.auther} </h5>}
//             </div>
//           </div>
//         </form>
//         </div>
//          ))}
//     </>
//   )
// }

// export default Card
