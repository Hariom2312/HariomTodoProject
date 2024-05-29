import React from 'react'
import Card from './Card'
import Sdata from "./Sdata"

const Service = () => {
  return (
    <>
       <div className="my-5">
          <h1 className='text-center'> <span className='brd'>Our Services</span></h1>
       </div>
        <div className="container-fluid mb-5 ">
          <div className="row">
             <div className="col-10 mx-auto">
                <div className="row gy-4">
                   {/* <Card/> */}

                 {
                    Sdata.map((currVal,ind)=>{
                        return(
                          <Card
                            key={ind}
                            imgsrc={currVal.imgsrc}
                            title={currVal.title}
                            // summary={currVal.summary}
                          />
                        );
                    })
                 }

                </div>
             </div>
          </div>
        </div>
    </>
  )
}

export default Service;
