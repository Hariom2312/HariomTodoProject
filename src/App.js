import React from 'react';
import "./index.css";
import Heading from './Heading';
import Resturants from './components/Basic/Resturants';
import NavBar from './Hariom/NavBar';
import { Routes, Route } from "react-router-dom";
import A from './Hariom/About';
import B from './Hariom/Contact';
import Error from './Hariom/Error';
import User from './Hariom/User';
import Search from './Hariom/Search';
import {redirect} from 'react-router-dom';

// import Heading from './Heading';
// import UseState from './components/Hooks/useState';
// import UseEffect from './components/Hooks/useEffect';
// import UseReducer from './components/Hooks/UseReducer';
// import Todo from './components/todoReact/Todo';
// import Temp from './components/weather/temp';



const App =()=>{
    return(
        <>

        
           {/* <NavBar/>
            <Routes>
                <Route exact path='/search' element={<Search/>}/>
                <Route exact path="/" element={<A/>}/>
                <Route exact path="/B" element={<B/>}/>
                <Route exact path="/User" element={<User/>}/>
                <Route path="*" element={<Error/>}/> */}
                {/* <redirect to='/'/> */}
            {/* </Routes> */}
            {/* <A/>
            <B/> */}
           {/* <Heading/> */}

        </>
    );
};

export default App;



//  components
 // Rule no 1 React Fragments
    // Sabhi tag close hoge
    // use camel case of attribute
    // className in place of class
    
//  const App = ()=>{
//   return (
//    <>
//    {/* Nested Component */}
//         {/* <MyName/>  */}
//         <Resturants/>
// 
//         {/* <p>Hariom</p> */}
//         {/* <h1>Hariom Dhakad {23}</h1> */}
//     </>
//   )
// }
// 
// componant no2
// const MyName = ()=>{
//   return(
//     <>
//       <h1>H</h1>
//     </>
//   )
// }
// 
// 
// const App = ()=>{
//   return(
//      <UseState/>,
//      <UseEffect/>,
//      <UseReducer/>
//   );
// }
// 
// const App = ()=>{
//    return <>
//       <Todo/>
//    </>
// }
// 
// const App = ()=>{
//     return(
//       <>
//         <Temp/> 
//       </>
//    )
// }
// 
// class Car{
//     constructor(name){
//         this.brand = name;
//     }
//     present(){
//         return `I have a ${this.brand}`;
//     }
// }
// 
// const myCar = new Car("Ford");
// console.log(myCar);
// 
// const App = ()=>{
//     return(
//         <>
//           <myCar/>
//         </>
//     )
// }
// 
// import React from 'react';
// import Heading from './Heading';
