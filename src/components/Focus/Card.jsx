import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
          return (
                    <div className='glass-container' style={{ backgroundColor: props.backgroundColor }}>
                              <div className="focus-item">
                                        <div className="img-container">
                                                  <img src={props.img} alt="" />
                                        </div>
                                        <div>
                                                  <h3 style={{ textAlign: 'left' }}>{props.title}</h3>
                                        </div>

                              </div>
                              <div className="status-bar">
                                        <p className="masterp">{props.master}</p>

                                        <p className="status">Status: {props.status}</p>

                                        <p></p>
                              </div>
                              <div>
                                        {props.content}
                                        {/* <button style={{ marginTop: '10px', cursor: 'pointer', backgroundColor: 'blue' }}><Link style={{ textDecoration: 'underline', color: 'white' }} to='/dec'>Explore</Link></button> */}
                              </div>


                    </div>
          )
}

export default Card;