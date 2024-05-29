import React, { useState } from "react";

const Contact = () => {
  const[data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (event)=>{
      const { name,value} = event.target;
      
      setData((preVal)=>{
          return {
            ...preVal,
            [name]:value,
          };
      });
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and all the information you fil in the form..`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            {/* Form  */}
            <form onSubmit={formSubmit}>

              <div class="form-group mb-3">
                <label for="exampleFormControlInput1">Full name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onClick={InputEvent}
                  placeholder="Enter your name"
                />
              </div>

              <div class="form-group mb-3">
                <label for="exampleFormControlInput2">Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput2"
                  name="phone"
                  value={data.phone}
                  onClick={InputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div class="form-group mb-3">
                <label for="exampleFormControlInput3">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput3"
                  name="email"
                  value={data.email}
                  onClick={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              
              <div class="form-group mb-3">
                <label for="exampleFormControlTextarea4">
                 Message
                </label>
                <textarea
                  class="form-control"
                  name="msg"
                  placeholder="Enter Something..."
                  value={data.msg}
                  onClick={InputEvent}
                  id="exampleFormControlTextarea4"
                  rows="3"
                ></textarea>
              </div>
             
              <button type="submit" class="btn btn-primary mb-3">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
