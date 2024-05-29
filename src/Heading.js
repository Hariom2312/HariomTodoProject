import React, { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
// import "../index.css";
import { useState } from 'react';
import axios from 'axios';
// import` React,{useState,useEffect} from 'react'
// import "../index.css";
// import Clock from 'react-digital-clock';
// import Todo from './todo';



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';



// const Heading = () => {
  // const [incr,setincr] = useState(0);
  // const decr = ()=>{
  //     if(incr>0){
  //       setincr(incr-1);
  //     }else{
  //       alert("Began 🥱🥱");
  //     }
  // }
//  return (
   <>   
       {/* <p>{incr}</p>
       <button class="button-18" role="button" onClick={()=>setincr(incr+1)}>INCR</button>
       <button class="button-18" role="button" onClick={decr}>DECR</button> */}
      {/* <div className="container">
          <h1 className='text-center'>Hariom</h1>
          <br />
          <button className='btn btn-outline-success'>Click Me</button>
      </div> */}
     </>
//  );
// };

// export default Heading;




// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }


// import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';

// const Heading = () => {
//   return (
//     <>
//       <h1>Here Hariom</h1>
//       <p>Bamboriya</p>

//       <ol>
//         <li>Hariom</li>
//         <li>Bamboriya</li>
//         <li>Dhakad</li>
//         <li>Hariom Bamboriya</li>
//       </ol>
//     </>
//   );
// };

// export default Heading;


// import React from 'react';
// import "./style.css";

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


// const Heading = () => {
//   return (
//     <>
//        <section className="header">
//          <div className="min-container">
//           Hello sir,<span style={cssStyle}> {geeting} </span>     
//          </div>
//        </section>
//     </>
//   )
// }

// export default Heading;

// import React from 'react'
// const  add = (a,b) =>{return a+b }
// const  sub = (a,b) =>{return a-b }
// const  mul = (a,b) =>{return a*b }
// const  div = (a,b) =>{return (a/b).toFixed(2) }

// const Heading = () => {
//   return (
//     <>
//         <ul>
//           <li>sum of two no is {add(40,4)}</li>
//           <li>sub of two no is {sub(7,5)}</li>
//           <li>Mul of two no is {mul(5,4)}</li>
//           <li>Div of two no is {div(40,3)}</li>
//         </ul>
//     </>
//   )
// }

// export default Heading




// const Slot = ()=>{
//      let x = '🤩';
//      let y = '🤩';
//      let z = '🤩';
//      if(x==y && y==z){
//       return(
//         <>
//           <div className='container'>
//             <h1>{" "} {x} {y} {z} {" "}</h1>
//             <h1>This is Maching.</h1>
//             <hr />
//           </div>
//         </>
//       )
//    }
// }
   


// const Heading = () => {
  
  // let time = new Date().toLocaleTimeString();
  // const[currData,setCurrData] = useState(time);
   
  //  setInterval(() => {
  //   time = new Date().toLocaleTimeString()
  //   setCurrData(time)
  // }, 1000); 

  // return (
  //   <>
      {/* <div className="cards">
        <div className="card">
            <img className='card_img' src="./images/chola.jpg" alt="card-img" />
          <div className="card-info">
             <span className='card__category'>NETFLIX ORIGINAL SERIES</span>
             <h3 className='card__title'> </h3>
             <a href="#" target="_black">
                <button>WATCH NOW</button>
             </a>
          </div>
        </div>
      </div> */}
           {/* <h1 className='heading_style'>🎰welcome to <span style={{fontWeight:'bold'}}>slot machine game</span>🎰</h1>
           <div className="">
              <Slot />
           </div> */}

           {/* <div className="container">
              <div className="card">
                 <h1>{currData}</h1>
                 <button onClick={()=>setCurrData(currData+1)}>click me</button>
              </div>
           </div> */}

           {/* <div className="container">
              <div className="card">
                 <h1>{currData}</h1>
                 <button onClick={()=>setInterval}>get time</button>
              </div>
           </div> */}
    {/* </>
  )
} */}


// const Heading =()=>{
//    const background = " rgb(205, 191, 191)";
//    const newbtnColor = "purple";

//   const [bgColor,setBgColor] = useState(background);
//   const [btnColor,setBtnColor] = useState(newbtnColor);
//   const [name,setName] = useState("click me");

//   const updateBgChange = ()=>{
//      setBgColor("rgba(141, 181, 214, 0.955)");
//      setBtnColor(" rgb(144, 120, 206)");
//      setName("YAhh ! 🥳");
//   }
  
//   const Back = ()=>{
//     setName("hit double click 🤩");
//     setBtnColor("purple");
//     setBgColor("rgb(205, 191, 191)");
//   }
   
//   return(
//     <>
//       <div className="container"  style={{backgroundColor: bgColor}} >
//            <button style={{backgroundColor:btnColor}} onClick={updateBgChange} onDoubleClick={Back}>{name}</button>
//         </div>
//     </>
//   )
// }
// export default Heading;



// const Heading = () => {

//   const [fullName,setFullName] = useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phone:"+91"
//  });

// //  const [name,setName] = useState("");
  
//   // const updated = ()=>{
//   //   setName(newTxt);
//   // }

//   const inputEvent = (event)=>{
//    setFullName(event.target.value);
//   //  const value = event.target.value;
//   //  const name = event.target.name;
    
//   const{name,value} = event.target;

//    setFullName((preValue)=>{



    //   if(name==='fname'){
    //   return{
    //     fname:value,
    //     lname:preValue.lname,
    //   }
    //  }else if(name ==='lname'){
    //   return{
    //     fname:preValue.fname,
    //     lname:value,
    //   }
    //  }

      // if(name === 'fname'){
      //   return {...preValue,fname:value}
      // }
      // else if(name === 'lname'){
      //   return {...preValue,lname:value}
      // }
      // else if(name === 'email'){
      //   return {...preValue,email:value}
      // }
      // else if(name === 'phone'){
      //   return {...preValue,phone:value}
      // }

      // return {
      //   ...preValue,
      //   [name]:value
      // };
//   })
// }

//   const onSubmits = (event)=>{
//      event.preventDefault();
     
//   };

//   return (
//     <>
//       <div className="container">
//         <div className='card'>
//         <form onSubmit={onSubmits}>
//             <h1>Hello {fullName.fname} {fullName.lname}</h1>
//            <input className='input' 
//               type="text"
//               placeholder='enter your fname'
//               name='fname'
//               value={fullName.fname} 
//               onChange={inputEvent}
//              />
//            <input className='input' 
//               type="text"
//               placeholder='enter your lname'
//               name='lname'
//               value={fullName.lname} 
//               onChange={inputEvent}
//              />
//            <input className='input' 
//               type="email"
//               placeholder='enter your email:'
//               name='email'
//               value={fullName.email} 
//               onChange={inputEvent}
//              />
//            <input className='input' 
//               type="tel"   
//               placeholder='enter your phone No:'
//               name='phone'
//               value={fullName.phone} 
//               onChange={inputEvent}
//              />
//              {/* <input type="tel" name="" id="" /> */}
//            <br />
//          </form>
//          </div>
//          <button type='submit'>submit</button>
//       </div>
//     </>
//   )
// }

// export default Heading;


// const Heading = () => {

//    const[inputList,setInputList] = useState("");
//    const[Items,setItems] = useState([]);

//    const itemEvent = (event)=>{
//        setInputList(event.target.value);
//    };

//    const listOfItems = ()=>{
//        setItems((oldOItems)=>{
//           return [...oldOItems,inputList];
//        });
//       setInputList("");
//    };

//   return (
//     <>

//       <div className="main_div">
//            <div className="center_div">
//               <br />
//               <h1> ToDO List
//                <AddToHomeScreenIcon className='icon'/>
//               </h1>
//               <br />
//               <input 
//                type="text" 
//                placeholder='Add a Items'
//                value={inputList}
//                onChange={itemEvent}
//               />
//               <button onClick={listOfItems}> + </button>
//               <ol>
//                { <li>
//                   {inputList}
//                </li> }
//                 { {Items.map((itemval)=>{
//                  return <Todo text={itemval} />
//                 })}}
//               </ol>
//            </div>
//       </div>
//     </>
//   );
// }
// export default Heading; 


// const Heading = () => {
//   return (
//     <>
//        <Clock/>
//     </>
//   )
// }

// export default Heading;

