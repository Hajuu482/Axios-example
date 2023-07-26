
import './App.css';

import React from 'react';

import axios from 'axios';

import { useState } from 'react';


function App() {

  const [posts, setPosts] = useState([]) ;

  const getAllPhotos = () => {

    axios.get("https://jsonplaceholder.typicode.com/posts").then ((Response) =>{

    setPosts(Response.data)})

  }

  return <div>

     <button onClick={getAllPhotos}>Get Data</button>

      {
        posts.map((post,index) => (

        <div className="item-parent">

          <div className="items">
  
            <p> {post.title} </p>
  
            <p>{post.body}</p> 

          </div>
       
        </div>
    
        ))
      }

  </div>  
}

export default App;
