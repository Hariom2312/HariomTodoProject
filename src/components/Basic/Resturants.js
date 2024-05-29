import React,{useState} from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import NavBar from "./NavBar.js";

const uniqueList = [
   ...new Set( Menu.map((currEle)=>{
     return currEle.category;
   })
   ),
   "All",
];

const Resturants = () => {
   const [menuData,setMenuData] = useState(Menu);
   const [menuList,setMenulist] = useState(uniqueList);

  const filterItem = (category) => {
   if(category==="All"){
      return(
         setMenuData(Menu)
      );
   }
     const updatedValues = Menu.filter((currEle) => {
        return (
           currEle.category === category
        );
     });
     setMenuData(updatedValues);
  };

  return (
   <> 
     <NavBar filterItem={filterItem} menuList={menuList} />
     <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturants
