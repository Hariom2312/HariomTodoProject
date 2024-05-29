import React from 'react'
import img from './homeImg.jpeg'
import Common from './Common'
const Home = () => {
  return (
    <>
       <Common 
          name="Grow your Business with"
          imgSrc={img}
          visit="/service"
          btname="Get Started"
       />
    </>
  )
}

export default Home;
