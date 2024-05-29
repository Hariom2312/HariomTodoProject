import React from 'react'
import img from './images.jpg'
import Common from './Common'
const About = () => {
  return (
    <>
       <Common
          name="Welcome to About page"
          imgSrc={img}
          visit="/contact"
          btname="Contact Now"
        />
    </>
  )
}

export default About;
