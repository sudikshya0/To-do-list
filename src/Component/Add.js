import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios';


function Add({closeModal}) {
  const [text, setText]= useState("");
  const [title, setTitle]= useState("");
  
  return (
    <div className="add-background">

      <div className="add-container">
        <span><i className="bi bi-x-circle" onClick={()=>closeModal(false)}></i></span>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Enter Text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setText(e.target.value)}></textarea>
              </div>
            </form>
        <button className='add-btn' >Add</button>
      </div>
    </div>
    
  )
}

export default Add