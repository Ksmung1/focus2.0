import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css'
import '../css/props.css';

function ExploreTopics () {

          

          return (
                    <div className="explore-topics flex col mid">
                              <div className="item">
                                        <Link to='/core-elements'>                                      
                                         <p>  1. Core Elements of the Course</p>
                                        </Link>
                              </div>
                              <div className="item">
                                        <Link to='/course-roadmap'>
                                        <p>        2. 6 Months Course Roadmap</p>
                                        </Link>
                                
                              </div>
                              <div className="item">
                                        <Link to='/course-progress'>
                                        <p>
                                        3. Course Progress

                                        </p>
                                        </Link>
                              </div>
                              <div className="item">
                                        <Link to='/course-syllabus'>
                                        <p>                                        4. Syllabus
                                        </p>
                                        </Link>
                              </div>
                              <div className="item">
                                        <Link to='/course-exam-pattern'>
                                        <p>                                        5. Exam Pattern
                                        </p>
                                        </Link>
                              </div>
                             
                    </div>
          )
}

export default ExploreTopics;