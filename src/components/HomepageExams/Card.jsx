import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          return (
                    <div className="homeExams-card">
                              <div className="img-container">
                                        <img src={props.img} />
                              </div>
                              <div className="card-info">
                                        <h1>{props.name}</h1>
                                        <p>{props.detail}</p>
                              </div>
                    </div>
          )
}

export default Card;