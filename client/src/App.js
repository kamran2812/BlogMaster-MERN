import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

import"./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Blog from './components/Blogwriter';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import Blogread from './components/Blogread';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

<Routes>  
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="signup" element={<Signup />} />
    <Route path="logout" element={<Logout />} />
    <Route path="blogwriter" element={<Blog />}  />
    <Route path="Blogread" element={<Blogread />}  />
<Route path="/home/:id" component={Blogread} />
    <Route path="*" element={<Errorpage/>}/> 
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
