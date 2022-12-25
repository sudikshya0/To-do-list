import React from 'react'
import './ListItem.css';
import axios from 'axios';

const ListItem = ({name, id ,detail ,onDelete, selected, setSelected}) => {
    console.log(selected);
    return (
    <div className='listItem-container' 
    onClick={()=>{
        // setSelected(id)
        if(selected==id){
            setSelected(-1);
        }
        else
            setSelected(id);
    }}> 
        <div>
            <div className="list-name">{name}</div>
            {selected === id && <div>{detail}</div>}
        </div>
        
        <div><i className="bi bi-trash" onClick={onDelete}></i></div>
    </div>
  )
}

export default ListItem