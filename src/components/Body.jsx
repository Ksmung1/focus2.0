import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchBar/SearchResults";
import HomepageShortCuts from "./HomePageShortCutsFolder/HomepageShortCuts";
import ScrollContainer from "./ScrollContainer";

function Body() {

          const [results, setResults] = useState([]);

          return (
                    <div className="Body">
                              <h1 style={{ fontSize: '27px', fontWeight: '800', marginTop: '90px', color: '#fe5a1d' }}>FOCUS</h1>
                              <div className="search-bar-container">
                                        <SearchBar setResults={setResults} />
                                        <SearchResults results={results} />
                              </div>
                              <HomepageShortCuts />
                              <div style={{color: '#000', textAlign:'left', padding: '10px'}}>
                                        <h1 style={{fontSize: '30px', fontWeight:'900', color: '#fe5a1d', fontFamily: 'serif'}}>Toppers` Choice</h1>
                                        <p><strong>Systematize</strong> your exam preparations, learn new <strong>tips and tricks</strong> and <strong>boost</strong> your <strong>productivity.</strong> At FOCUS, we help you <strong>PLAN, LEARN</strong> and <strong>ACCOMPLISH</strong> more in less time</p>
                              </div>
                              <div className="available-course">
                                        <h1>AVAILABLE COURSES</h1>
                                        <table>
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
                                        </table>
                              </div>
                              <div className="explore-exams">
                                        <img style={{width: '100%', margin: '50px 0 10px'}} src={`${process.env.PUBLIC_URL}/images/image.png`} alt="dimond"  />
                              {/* <Focus></Focus> */}

                                        {/* <Advertisements /> */}

                                        {/* Course Curriculum */}
                                        
                                        <ScrollContainer></ScrollContainer>

                                   
                              </div>
                              <div className="contacts">

                                        <p><a href="https://wa.me/918974808279"><img src="./images/whatsapp.png" alt="dimond"  /></a></p>
                                        <h1 style={{ marginBottom: '30px', fontSize: '16px', color: 'black' }}>Made with ❤️ by Nextjourney</h1>
                                        <h5 style={{ background: '#fe5a1d', margin: ' 0 0 -10px 0', padding: '10px' }}>Copyright © Focus</h5>
                              </div>
                    </div>
          )
}

export default Body;