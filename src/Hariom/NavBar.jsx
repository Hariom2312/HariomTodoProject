import React from 'react'
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
// import "..index.css"
// import Location from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <div className="container">
          <NavLink exact className="active_class" to='/'> AboutUs </NavLink>  
          <NavLink exact  className="active_class" to='/B'> ContectUS </NavLink>
          <NavLink exact  className="active_class" to='/search'> Search </NavLink>
     </div>
      {/* <Link exact to='/'> APage </Link>
      <Link exact to='/B'> BPage </Link> */}

      {/* <br /><br /><br /> */}
{/* 
      <a href="/"> APage</a>
      <a href="/B"> BPage</a> */}
    </>

  )
}

export default NavBar;
