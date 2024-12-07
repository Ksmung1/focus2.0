import React, { useRef } from "react";
import './Focus.css';
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import CountdownTimer from "../Countdown/Countdown";

function Focus() {
          const scrollContainerRef1 = useRef(null);
          const scrollContainerRef2 = useRef(null);


          const content1 =
                    <div className="class-content">
                              <ul>
                                        <li>✅ 6 Months of Offline Classes</li>
                                        <li>✅ 300 + Hours of Learning</li>
                                        <li>✅ Leadership and Soft Skills Training for SSB</li>
                                        <li>✅ Physical Fitness Training</li>
                                        <li>✅ Dedicated Career Coach and Personal Mentor</li>

                              </ul>
                    </div>

          const content2 =
                    <div className="class-content">
                              <ul>
                                        <li>✅ 12 Months of Offline Classes</li>
                                        <li>✅ Concept Clearance</li>
                                        <li>✅ Problem Solving</li>
                                        <li>✅ Previous Years Questions</li>
                                        <li>✅ Test Series</li>

                              </ul>
                    </div>

          const content3 =
                    <div className="class-content">
                              <ul>
                                        <li>✅ 60 Days Offline Classes</li>
                                        <li>✅ Concept Clearance</li>
                                        <li>✅ Problem Solving</li>
                                        <li>✅ Previous Years Questions</li>
                                        <li>✅ Pre-Board Exam</li>
                              </ul>
                    </div>
          const scrollNext = (containerRef) => {
                    const container = containerRef.current;
                    if (container) {
                              container.scrollTo({
                                        left: container.scrollLeft + container.clientWidth,
                                        behavior: 'smooth',
                              });
                    }
          };

          const scrollPrev = (containerRef) => {
                    const container = containerRef.current;
                    if (container) {
                              container.scrollTo({
                                        left: container.scrollLeft - container.clientWidth,
                                        behavior: 'smooth',
                              });
                    }
          };

          return (
                    <div>
                              {/* <h1 style={{
                                        fontSize: '24px',
                                        fontWeight: '800',
                                        color: 'blue',
                                        margin: '30px 0 0',
                                        textAlign: 'center',
                              }}>OFFLINE COACHING</h1> */}

                              {/* <div className="scroll-container" ref={scrollContainerRef1}>
                                        <div className="scroll-content">

                                                  <Card img='/images/soldier.png' title="DEFENCE EXAM COURSE" master='Masterclass' status='Ongoing' content={content1} ></Card>
                                        </div> */}
                              {/* <div className="scroll-content">

                                                  <Card img='/images/doctor.png' title="NEET & JEE" master='Masterclass' status='Upcoming' content={content2} backgroundColor='#ddd8ae87'></Card>
                                        </div> */}
                              {/* Add more card components as needed */}
                              {/* </div> */}
                              {/* <div className="scroll-buttons">
                                        <button onClick={() => scrollPrev(scrollContainerRef1)}><img src="images/left-arrow.png" alt="Previous" /></button>
                                        <button onClick={() => scrollNext(scrollContainerRef1)}><img src="images/right-arrow.png" alt="Next" /></button>
                              </div> */}

                              {/* Second set of cards */}
                              <div className="background-container">
                                        <h1>Join Our Free Coaching</h1>

                              </div>
                              <h1 style={{ textAlign: 'center', margin: '0', padding: ' 0', color: 'blue' }}>For Class-10 Board Exam 2024</h1>
                              <CountdownTimer></CountdownTimer>

                              <div style={{ margin: '0px auto 100px', display: 'block', padding: '0 30px' }} >
                                        <img style={{ width: '100%', borderRadius: '5px' }} src="/images/Focus-Class X Board Exam 2024.jpg" alt="" />
                                        <a href="https://wa.me/918974808279"><h1 style={{ margin: ' 20px 40px -10px', color: ' Purple', textAlign: 'center', fontSize: '18px', textDecoration: 'underline', fontFamily: 'cursive' }} >Limited Seats. <span style={{ fontSize: '18px', fontFamily: 'cursive' }} > Book Now!</span></h1></a>

                              </div>
                              {/* <div className="scroll-container" ref={scrollContainerRef2}>
                                        <div className="scroll-content" style={{ overflow: 'none' }}>

                                        </div> */}
                              {/* <div className="scroll-content">

                                                  <Card img='/images/graduates.png' title="CLASS XII BOARD EXAM 2024" master='Exam Booster Course' status='Upcoming' content={content3} backgroundColor="rgba(144, 238, 144, 0.544)"></Card>
                                        </div> */}
                              {/* Add more card components as needed */}
                              {/* </div> */}
                              {/* <div className="scroll-buttons">
                                        <button onClick={() => scrollPrev(scrollContainerRef2)}><img src="images/left-arrow.png" alt="Previous" /></button>
                                        <button onClick={() => scrollNext(scrollContainerRef2)}><img src="images/right-arrow.png" alt="Next" /></button>
                              </div> */}
                    </div >
          );
}

export default Focus;
