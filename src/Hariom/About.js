import React,{useState,useEffect} from "react";
import axios from "axios";
// import "../index.css";

  const About = () => {
    return (
      <>
       <span className="flex">
          <h1>Hello I'm About page</h1>
       </span>
      </>
    )
  }
  
  export default About;

// const A = () => {
//     const[num,setNum] = useState();
    
//     useEffect(()=>{
//         //   alert("Hyy");
//         async function getData(){
//             const res = await axios.get(``);
//         }
//     });
  
//     return (
//       <>
//         <h1>You choose {num} value</h1>
//         <select 
//          value={num}
//          onClick={(event)=>{
//             setNum = (event.target.value);
//         }}
//          >
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//          </select>
//       </>
//     );
//   };
  
//   export default A;

  
  
  
