import React, { useState } from "react";
import "./project.css";
import { questions } from "./api.js";
import Acordian from "./acordian.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Project = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
      <h1>React Interview Questions</h1>
        {data.map((currElem) => {
          const { id, questions, answer } = currElem;
          return <Acordian key={id} {...currElem} />;
        })}

      </section>
    </>
  );
};

export default Project;
