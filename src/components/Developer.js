import React from "react";
import dev from "../assets/rishabh_prasad.jpeg";
import { developerDataRishabh } from "../utils/userData";
import "../css-flies/developer.css";
import Copywritecom from "./Copywritecom";

function Developer() {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <div className="dev-img">
            <img src={dev} alt="devloper" className="main-img" />
          </div>
          <span className="name">Rishabh Prasad</span>
          <div className="tags">
            {developerDataRishabh.map(({ src, link, name }, index) => {
              return (
                <div key={index}>
                  <img
                    src={src}
                    alt={name}
                    width="40px"
                    onClick={() => window.open(link)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Copywritecom />
    </>
  );
}

export default Developer;
