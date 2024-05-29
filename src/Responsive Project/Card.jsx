import React from "react";
import img from "./images.jpg";
import {NavLink} from "react-router-dom";

const Card = (props) => {
    const{imgsrc,title} = props;
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={imgsrc} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              {/* {props.summary} */}
            </p>
            <NavLink to="/contact" class="btn btn-primary">
              Go somewhere.
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
