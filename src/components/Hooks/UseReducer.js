import React, { useEffect, useReducer } from "react";
import "./style.css";
import { useCallback } from "react";

const reducer = (state,action)=>{
    if(action.type==='INCR'){
        state = state+ 1;
    }
     else if(state > 0 && action.type==='DECR'){
        state =state- 1;
     }
     else return state;
};

const UseReducer = () => {
   const initialData=10;
//    const[myNum,setMyNum] = useState(initialdata);
      const [state,dispatch] = useReducer(reducer, initialData);
return (
    <>
       <div className="center_div">
         <p>{state}</p>
         <div class="button2" onClick={()=> dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR 
         </div>
         <div class="button2" onClick={()=>dispatch({type:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR 
         </div>
       </div>
    </>
  );
};

export default UseReducer
