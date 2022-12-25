import React, { useState,useEffect } from 'react'
import ListItem from './ListItem'
import data from '../data.json'
import Add from './Add'
import './Add.css'
import axios from 'axios'
const List = () => {
    const [selected, setSelected] = useState(-1);
    const [openModal, setOpenModal]= useState(false);
    const [list, setData]= useState(data);

  return (
    <div>
        <div className="list-text">
          <h1>To Do</h1>
          <button className="add-new-btn" onClick={()=>setOpenModal(true)}>Add New</button>
          {openModal && <Add closeModal={setOpenModal}/>}
        </div>
        
        {
            list.map((item)=>
            <ListItem id={item.id} name={item.name} detail={item.detail} key={item.id} selected={selected} setSelected={setSelected}
            onDelete={() => {
                setData(data=>data?.filter(i => i.id !== item.id))
              }}
            />
            )}  
    
    </div>
  )
}

export default List