import React, { useState } from 'react'
import './googlekeep.css';
import Header from './Header';
import CreateNote from './createNote';
import Footer from './footer';
import Note from './Note';
import { Alert } from 'bootstrap';

const GoogleKeep = () => {
  const[addItem,setAddItem] = useState([]);

  const addNote = (note)=>{
      // alert('I am clicked');
      setAddItem((prevData)=>{
        return [...prevData,note];
      });
  };

  const onDelete = (id)=>{
      setAddItem((olddata)=>{
           return olddata.filter((currdata,indx)=>{
              return indx !== id;
           })
      });
  };

  return (
    <>
       <Header/>
       <CreateNote passNote = {addNote}/>
       {/* <Note/> */}
       { addItem.map((currElem,index)=>{
            return <Note
                 key = {index}
                 id = {index}
                 title = {currElem.title}
                 content = {currElem.content}  
                 deleteItem = {onDelete} 
            />
        })}
       <Footer/>
    </>
  )
}
export default GoogleKeep;
