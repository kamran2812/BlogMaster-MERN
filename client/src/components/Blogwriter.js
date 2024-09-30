import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Blogwriter = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    category: "",
    title: '',
    description: '',
    content: '',
    auther: '',
    image: "null"
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleFileInput = (e) => {
    setUser({ ...user, image: e.target.files[0] });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { category, title, description, content, auther } = user;
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('auther', auther);
    formData.append('image', user.image, user.image.name);
  
    const res = await fetch('/blogpost', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
  
    const data = await res.json();
    if (res.status === 422 || !data) {
      alert('Invalid inputs');
      console.log('Invalid inputs');
    } else {
      alert('blog post');
      console.log('blog post');
      navigate('/', { replace: true });
    }
  };
  
  return (
    <>
     <div className='container-fluid'>
  <div className='row mt-4'>
    <div className="col-md-6 offset-md-3" >
      <div className="panel card px-5 py-5">
        <form method='POST' encType='multipart/form-data'>
          <div className="form-group">
            <label htmlFor="title">category:</label>
            <input type="text" name="category" className="form-control" id="title" onChange={handleInputs} value={user.category}/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="form-control" id="title" onChange={handleInputs} value={user.title}/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Description:</label>
            <input type="text" name="description" className="form-control" id="title" onChange={handleInputs} value={user.description}/>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Message" name="content" onChange={handleInputs} value={user.content}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input type="text" name="auther" className="form-control" id="author" onChange={handleInputs} value={user.auther}/>
          </div>
          <div className='mt-2'>
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" onChange={handleFileInput} required />
          </div>
          <button type="submit" value="post" name="post" className='btn btn-outline-dark my-2 px-5' onClick={postData}>POST</button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Blogwriter
