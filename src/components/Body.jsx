import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchBar/SearchResults";
import HomepageShortCuts from "./HomePageShortCutsFolder/HomepageShortCuts";
import { useNavigate } from "react-router-dom";
import GoalDigger from "./GoalDigger";
import PhotoGallery from "./PhotoGallery";
import Slider from "./Slider";
import Founder from "./Founder";

function Body() {
          const navigate = useNavigate();

          const [results, setResults] = useState([]);

          return (
                    <div className="Body">
                              <img src={`${process.env.PUBLIC_URL}/images/target.gif`} alt="target" style={{margin: '80px 0 0 0'}} />
                              <h1 style={{ fontSize: '40px', fontWeight: '800', marginTop: '10px', marginBottom: '0', color: '#fe5a1d' }}>FOCUS</h1>
                              <p style={{color: 'white', margin: '0 0 30px 0 ', fontWeight: 10, letterSpacing: '2px'}}>next generation</p>
                              <div className="search-bar-container">
                                        <SearchBar setResults={setResults} />
                                        <SearchResults results={results} />
                              </div>
                              <HomepageShortCuts />
                              <div className="available-course">
                                        <h1>AVAILABLE COURSES</h1>
                                        {/* <table>
                                                  <thead>
                                                            <tr>
                                                                      <th>EXAM</th>
                                                                      <th>Class X</th>
                                                                      <th>Class XII</th>
                                                                      <th>NDA & CDS</th>
                                                                      <th>NEET</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            <tr>
                                                                      <td style={{padding: '5px', fontWeight: 'bold'}}>SUBJECTS</td>
                                                                      <td>
                                                                                <ul>
                                                                                          <li>Maths</li>
                                                                                          <li>Science</li>
                                                                                          <li>Social Science</li>
                                                                                </ul>
                                                                      </td>
                                                                      <td>
                                                                                <ul>
                                                                                          <li>Chemistry</li>
                                                                                </ul>
                                                                      </td>
                                                                      <td>
                                                                                <ul>
                                                                                          <li>Maths</li>
                                                                                          <li>GAT/GA</li>
                                                                                          <li>English</li>
                                                                                </ul>
                                                                      </td>
                                                                      <td>
                                                                                <ul>
                                                                                          <li>Chemistry</li>
                                                                                </ul>
                                                                      </td>
                                                            </tr>
                                                  </tbody>
                                        </table> */}
                                        <div className="course-options flex mid gap">
                                                  <div className="item ongoing" onClick={()=> {navigate('/classx')}}>
                                                            Class X
                                                            {/* <span className="status-badge ongoing-badge">Ongoing</span> */}
                                                  </div>
                                                  <div className="item ongoing" onClick={()=> {navigate('/classxii')}}>
                                                            ClassXII

                                                  </div>
                                                  <div className="item ongoing" onClick={()=> {navigate('/neet')}}>
                                                            NEET

                                                  </div>
                                                  <div className="item ongoing" onClick={()=>{navigate('/dec')}}>
                                                  Defence
                                                  </div>
                             
         
                                                  
                                                
                                                 
                                        </div>
                              </div>

                              <PhotoGallery />

                              <div style={{color: '#fff', textAlign:'left', padding: '20px'}}>
                                        <h1 style={{fontSize: '30px', fontWeight:'900',textAlign:'center', color: '#fe5a1d', fontFamily: 'serif'}}>Toppers` Choice</h1>
                                        <p className="courier-prime"><strong>Systematize</strong> your exam preparations, learn new <strong>tips and tricks</strong> and <strong>boost</strong> your <strong>productivity.</strong> At FOCUS, we help you <strong>PLAN, LEARN</strong> and <strong>ACCOMPLISH</strong> more in less time</p>
                              </div>
                              
                              <Slider></Slider>
                              {/* <div className="flex mid gap" style={{margin: '20px 20px 0'}}>
                                        <img src={`${process.env.PUBLIC_URL}/images/fire.gif`} alt="" />
                              <h1 style={{ fontSize: '26px',color: '#fe5a1d', fontWeight: '800' }}>UPCOMING EVENTS</h1>

                              </div> */}
                              <div className="explore-exams">
                                       
                                        {/* <img style={{width: '100%', }} src={`${process.env.PUBLIC_URL}/images/image.png`} alt="dimond"  /> */}
                              {/* <Focus></Focus> */}

                                        {/* <Advertisements /> */}

                                        {/* Course Curriculum */}
                                        
                                        {/* <ScrollContainer></ScrollContainer> */}

                                   
                              </div>
                              {/* <div className="deepfocus-link">
                              <div className="info">
                                                  <div className="flex mid">

                                                  </div>
                                                  <img src={`${process.env.PUBLIC_URL}/images/target.gif`} alt="" />
                                        <h1>DEEP FOCUS</h1>

                                        <p onClick={() => window.location.href = 'https://.netlify.app/'}>Increase your Productivity by mastering Time Management</p>
                                        <button onClick={()=>{window.location.href = 'https://.netlify.app/'}}>Visit</button>
                                        </div>
                              </div> */}
                              <GoalDigger></GoalDigger>
                              {/* <div className="goaldigger-link">
                              <div className="info">
                                                  <div className="flex mid">

                                                  </div>
                                                  <img src={`${process.env.PUBLIC_URL}/images/rating.png`} alt="" />
                                        <h1>GOAL DIGGER</h1>

                                        <p onClick={() => window.location.href = 'https://.netlify.app/'}>Current Affairs for Aspirants - By Aspirants</p>
                                        <button onClick={()=>{window.location.href = 'https://.netlify.app/'}}>Visit</button>
                                        </div>
                              </div> */}
                              <div className="educafe-link">
                                        <div className="info">
                                                  <div className="flex mid">

                                                  </div>
                                                  <img src={`${process.env.PUBLIC_URL}/images/coffee-cup.gif`} alt="" />
                                        <h1>EDUCAFE</h1>

                                        <p onClick={() => window.location.href = 'https://edu-cafe.netlify.app/'}>Home is where love surrounds you — but so do distractions. Family chats, neighbors visiting, and friends calling can break your focus. That’s why we built <strong>EDUCAFE</strong> — a peaceful space where your goals get the attention they deserve.</p>
                                        <button onClick={()=>{window.location.href = 'https://edu-cafe.netlify.app/'}}>Visit</button>
                                        </div>
                              </div>

                              <div style={{margin: '70px 20px'}}>
                              <img style={{width:'100%',border: '1px solid red'}} src="/images/WhatsApp Image 2025-01-21 at 23.19.31_41e6be10.jpg" alt="" />
                              </div>
                              <Founder></Founder>
                              <div className="contacts">

                                        <p><a href="https://wa.me/918974808279"><img src="./images/whatsapp.png" alt="dimond"  /></a></p>
                                        <h1 style={{ marginBottom: '30px', fontSize: '16px', color: 'white' }}>Made with ❤️ by Nextjourney</h1>
                                        <h5 style={{ background: '#fe5a1d', margin: ' 0 0 -10px 0', padding: '10px' }}>Copyright © Focus</h5>
                              </div>
                    </div>
          )
}

export default Body;