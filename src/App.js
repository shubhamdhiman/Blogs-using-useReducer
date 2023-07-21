import { useState,useReducer } from "react";

// Reducer function
import {blogsReducer} from './reducer'

// importing css
import "./App.css";


function App() {

  // storing formdata in a component state
  const [formData,setFormData] = useState({
    title:"",
    desc:"",
  })

  // Creating reducer state
  const[arr,dispatch] = useReducer(blogsReducer,[])

  // Add blog to reducer
  function addBlog(e) {
    e.preventDefault();
    dispatch({type:"add",blog:{title:formData.title,desc:formData.desc}})
    setFormData({title:"",desc:""})
  }

  // Remove blog from reducer
  function deleteBlog(i){
    dispatch({type:"remove",indx:i})
  }


  return (
    <div className="App">
      <div className="container">
        <form>
          <label for="title">
            <h1>Title</h1>
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({title:e.target.value,desc:formData.desc})}
          />
          <label for="desc">
            <h1>Description</h1>
          </label>
          <input
            type="text"
            id="desc"
            value={formData.desc}
            onChange={(e) => setFormData({title:formData.title,desc:e.target.value})}
          />
          <button
            type="submit"
            className="addBtn"
            onClick={(e) => {
              addBlog(e);
            }}
          >
            Add
          </button>
        </form>
      </div>
      {arr.map((item, i) => {
         return <div className="blog" key={i}>
          <div className="title">{item.title}</div>
          <div className="desc">{item.desc}</div>
          <button type="submit" className="deleteBtn" onClick={()=>{deleteBlog(i)}}>
            Delete
          </button>
        </div>;
      })}
    </div>
  );
}

export default App;
