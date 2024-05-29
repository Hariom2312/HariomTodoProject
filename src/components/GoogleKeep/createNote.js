import React,{useState}from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
   const[expand,setExpand] = useState(false);
   const[note,setNote] = useState({
      title:"",
      content:"",
   });
  
   const InputEvent =(event)=>{
    //  const value = event.target.value;
    //  const name = event.target.name; 

     const{name,value} = event.target;

     setNote((prev)=>{
         return {
          ...prev,
          [name]:value,
         };
       });
   }

   const addEvent = ()=>{
      if((note.title=="") ) return;
      props.passNote(note);

      // afetr the click + button clean
      setNote({
          title:"",
          content:"",
        });
   };

   const expandIt = ()=>{
      setExpand(true);
   }

   const backToNormal= ()=>{
    setExpand(false);
   }

  return (
    <>
      <div className="main_note">
        <form>
          { expand ?
            <input type="text" 
            placeholder="Title"
            autoComplete='off'
            name='title'
            value={note.title}
            onChange={InputEvent}
             />
            : null }
             <textarea 
             column=""
             rows=""
             placeholder='Write a note here...'
             name='content'
             value={note.content}
             onChange={InputEvent}
             onClick={expandIt}
             onDoubleClick={backToNormal}
              ></textarea>
           { expand ?
          <Button onClick={addEvent}>
              <AddIcon className='plus_sign'/>
          </Button>
          : null
          }
        </form>
      </div>
    </>
  );
};

export default CreateNote
