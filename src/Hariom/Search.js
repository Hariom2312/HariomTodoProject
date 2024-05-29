import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = () => {
    const [img,setImg] = useState("")
   return (
    <>
      <div className="flex">
        <div className='searchbar'>
           <input 
            type="text"
            placeholder='Search Anything?'
            value={img}
            onChange={(e)=>{
                console.log(e.target.value);
                setImg(e.target.value)}
            }
            />
        </div>
        <Sresult name={img}/>
    </div>
    </>
  )
}

export default Search;