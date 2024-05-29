import React from 'react'
const year = new Date().getFullYear();

const footer = () => {
  return (
    <>
       <footer>
           <p>copyright © {year}</p>
       </footer>
    </>
  )
}

export default footer;
