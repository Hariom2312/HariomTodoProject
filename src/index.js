import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
// import A from "./Hariom/About";
import "./index.css";
import App from "./components/newProject/App";
import {BrowserRouter} from 'react-router-dom';
// import Heading from "./Heading";
// import App from "./Responsive Project/App";
// import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter> 
        <App/>
        {/* <App/> */}
    </BrowserRouter>
  </>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.Fragment>
//    <App />
//   </React.Fragment>
// );

// import React from 'react';
// import ReactDom from 'react-dom';

// const date = new Date().getDate();
// const time = new Date().toLocaleDateString();

// const fname = "Hariom";
// const lname = "Bamboriya";

// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     {/* <h1>This is My First Self React App</h1>
//     <p>Hello Everyone welcome to my page</p>
//     <ol>
//      <li>one</li>
//      <li>two</li>
//      <li>three</li>
//      <li>four</li>
//      <li>five</li>
//     </ol> */}
//    {/* <h1>{`My Name is ${fname} ${lname}`}</h1>
//    <p>{`today Date is ${new Date().toLocaleDateString()}`}</p>
//    <p>{`Current Time is ${new Date().toLocaleTimeString()}`}</p> */}

//   </>
// )

// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css";

// let currDate = new Date(2023,12,21,17);
// currDate = currDate.getHours();

// let geeting= "";

// const cssStyle = {};

// if (currDate >= 1 && currDate <= 11) {
//   geeting = "Good Morning";
//   cssStyle.color="darkgreen";
// } else if (currDate >= 12 && currDate < 19) {
//   geeting = "Good Afternoon";
//   cssStyle.color="red";
// } else {
//   geeting = "Good Night";
//   cssStyle.color='black';
// }
// 
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <section className="header">
//       <div className="min-container">
//        Hello sir,<span style={cssStyle}> {geeting} </span>     
//       </div>
//     </section>
//   </>
// );
// 


// import App from "../src/components/newProject/App";
