// import React, { useEffect } from "react";
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const Home = (props) => {
//   const [posts, setPosts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate  =  useNavigate();
//   const fetchPosts = async() => {
//     try {
//       const res = await fetch('/home', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await res.json();
//       setPosts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const categories = new Set();
//   categories.add("All");
//   posts.forEach(post => categories.add(post.category));

//   useEffect(() => {
//     fetchPosts();
//   }, []);
 

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       try {
//         const res = await fetch(`/home/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem("jwtoken")}`
//           }
//         });
//         if (res.status === 200) {
//           const updatedPosts = posts.filter((post) => post._id !== id);
//           setPosts(updatedPosts);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
  
//   const handleEdit = (id) => {
//     navigate(`/blogedit/${id}`);
//   };
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     };
//   return (
//     <div className='container-fluid px-5 pt-3'>
//       <div class="row">

//         <div class="col-xl-3 col-sm-6 col-12 my-2 category_panel">
//           <div class="panel ">
//           <input type="text" class="form-control my-3" placeholder="Search by Title, Author, Category" onChange={handleSearch} />
//             <Link to="/blogwriter" role="button" aria-pressed="true">
//               <button className="btn btn-outline-dark my-2 " id="addPost"> Add Blog Post </button>
//             </Link>
//             <h3>Categories</h3>
//             <ul class="list-group cati-panel overflow-auto  ">
//               {Array.from(categories).map((category, index) => (
//                 <button to="/" role="button" aria-pressed="true" className='btn btn-dark  my-2 py-1' onClick={() => setSelectedCategory(category)}>
//                   <li class="list-group-item bg-dark text-light">{category}</li>
//                 </button>
//               ))}
//             </ul>
//           </div>
//         </div>

    
//         {posts
//   .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//   .filter(post => (
//     post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     post.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     post.auther.toLowerCase().includes(searchTerm.toLowerCase())
//   ))
//   .filter(post => selectedCategory === "All" || post.category === selectedCategory)
//   .map((post, index) => (
//     <div class="col-xl-3 col-sm-6 col-12 my-2">
//       <form method="GET">
//         <div class="card car_height">
//           <img src="https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top img_height" alt="..." />
//           <div class="card-body py-2 ">
//             <p class="card-category text-center cati-text py-0 my-1">{post.category.slice(0, 10)}
//               <span className="icon-edit">
//                 <i class="fa fa-edit fs-6" onClick={() => handleEdit(post._id)}></i>
//               </span>
//               <span className="icon-del">
//                 <i class="fas fa-trash-alt fs-6 " onClick={() => handleDelete(post._id)}></i>
//               </span>
//             </p>
//             <h5 class="card-title car_title py-0 my-0">{post.title.slice(0, 15)}...</h5>
//             <p class="card-text fs-6 my-1">{post.description.slice(0, 80)}...</p>
//             <Link to="" role="button" aria-pressed="true">
//               <button className="btn btn-outline-dark mt-1"  id="addPost">Read More</button>
//             </Link>
//             <h5 class="card-title my-0 py-0 text-center">{post.auther}</h5>
//           </div>
//         </div>
//       </form>
//     </div>
//   ))}



//       </div>
//     </div>
//   )
// };

// export default Home;

  // {posts
  // .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  // .filter(post => selectedCategory === "All" || post.category === selectedCategory)
  // .map((post, index) => (
  //   <div class="col-md-3 col-12 my-2">
  //     <form method="GET">
  //       <div class="card car_height">
  //         <img src="" class="card-img-top img_height" alt="..." />
  //         <div class="card-body">
  //           <p class="card-category text-center  py-0 my-1">{post.category}
  //             <span className="icon-edit">
  //               <i class="fa fa-edit fs-6" onClick={() => handleEdit(post._id)}></i>
  //             </span>
  //             <span className="icon-del">
  //               <i class="fas fa-trash-alt fs-6 " onClick={() => handleDelete(post._id)}></i>
  //             </span>
  //           </p>
  //           <h5 class="card-title car_title py-0 my-0">{post.title}</h5>
  //           <p class="card-text fs-6 my-2">{post.description.slice(0, 80)}...</p>
  //           <Link to="/" role="button" aria-pressed="true">
  //             <button className="btn btn-outline-dark mt-2" id="addPost">Read More</button>
  //           </Link>
  //           <h5 class="card-title my-0 py-0 text-center">{post.auther}</h5>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // ))} 
  import React, { useEffect } from "react";
  import { useState } from 'react';
  import { Link, useParams } from 'react-router-dom';
  import { useNavigate } from "react-router-dom";
  import Blogread from "./Blogread";
  
  const Home = (props) => {
    const [posts, setPosts] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    
    const fetchPosts = async() => {
      try {
        const res = await fetch('/home', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setPosts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (error) {
        console.log(error);
      }
    };
  
    const categories = new Set();
    categories.add("All");
    posts.forEach(post => categories.add(post.category));
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    useEffect(() => {
      if (id) {
        setSelectedPost(posts.find(post => post._id === id));
      }
    }, [id, posts]);
  
    const handleDelete = async (id) => {
      if (window.confirm('Are you sure you want to delete this post?')) {
        try {
          const res = await fetch(`/blogpost/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("jwtoken2")}`
            }
          });
          if (res.status === 401) {
            alert("this is not your post")
           }
          if (res.status === 200) {
            const updatedPosts = posts.filter((post) => post._id !== id);
            setPosts(updatedPosts);
          }
          
        } catch (error) {
          console.error(error);
        }
      }
    };
    
    
    const handleEdit = (id) => {
      navigate(`/blogedit/${id}`);
    }; 
  
    
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    
    if (selectedPost) {
      return (
        <Blogread post={selectedPost} />
      );
    }
    
    return (
      <div className='container-fluid px-5 pt-3'>
        <div class="row">
  
          <div class="col-xl-3 col-sm-6 col-12 my-2 category_panel">
            <div class="panel ">
            <input type="text" class="form-control my-3" placeholder="Search by Title, Author, Category" onChange={handleSearch} />
              <Link to="/blogwriter" role="button" aria-pressed="true">
                <button className="btn btn-outline-dark mb-2 " id="addPost"> Add Blog Post </button>
              </Link>
              <h3>Categories</h3>
              <ul class="list-group cati-panel overflow-auto  ">
                {Array.from(categories).map((category, index) => (
                  <button to="/" role="button" aria-pressed="true" className='btn mx-4 btn-dark  my-2 py-1' onClick={() => setSelectedCategory(category)}>
                    <li class="list-group-item px-0 bg-dark text-light">{category}</li>
                  </button>
                ))}
              </ul>
            </div>
          </div>
  
      
          {posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter(post => (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.auther.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    .filter(post => selectedCategory === "All" || post.category === selectedCategory)
    .map((post, index) => (
      <div class="col-xl-3 col-sm-6 col-12 mb-2">
        <form method="GET">
          <div>
          <img src={post.image} class="mt-0 precard" alt="..." /><span className=" fs-5 ms-1">{post.auther}</span>
          </div>
          <div class="card car_height mt-1">
          <img src={post.image} class="card-img-top img_height" alt="..." />
          <div className="card-body py-2">
  <p className="card-category text-center cati-text py-0 my-1">
    {post.category.length > 15 ? post.category.slice(0, 15) + '...' : post.category}
    <span className="icon-edit">
      <i className="fa fa-edit fs-6" onClick={() => handleEdit(post._id)}></i>
    </span>
    <span className="icon-del">
      <i className="fas fa-trash-alt fs-6" onClick={() => handleDelete(post._id)}></i>
    </span>
  </p>
  <h5 className="card-title car_title py-0 my-0">{post.title.length > 15 ? post.title.slice(0, 15) + '...' : post.title}</h5>
  <p className="card-text fs-6 my-1">{post.description.length > 80 ? post.description.slice(0, 73) + '...' : post.description}</p>
  <Link to={`home${post._id}`} className="btn btn-outline-dark btn-sm py-1 my-2">Read more</Link>
 
  <div className="like-com ">
    <button className="btn  btn-sm py-1 my-2 mr-2">
      <i className="fa fa-thumbs-up"></i> Like
    </button>
    <button className="btn com  btn-sm py-1 my-2 ms-5">
      <i className="fa fa-comment"></i> Comment
    </button>
  </div>
</div>

          </div>
        </form>
      </div>
    ))} 
  

  
  
  
        </div>
      </div>
    )
  };
  
  export default Home;