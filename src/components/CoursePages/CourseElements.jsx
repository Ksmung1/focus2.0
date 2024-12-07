import React,{useState} from "react";

function CourseElement () {
          const selectedContent = useState(null)
          const [selectedTopic, setSelectedTopic] = useState(null);
          const handleTopicClick = (content) => {
                    setSelectedTopic(content);
          };
          const topicContent = {
                    "1": `1. Expert Faculty:\n Our team of experienced educators, industry specialists, and defense experts will guide you through the curriculum, sharing valuable insights and practical perspectives.`,
                    "2": "2. Personalized Learning: Understanding your unique needs, we offer personalized attention, doubt-clearing sessions, and individual mentorship to ensure your progress.",
                    "3": "3. Mock Tests and Analysis: Regular mock tests in exam-like conditions empower you to gauge your advancement, identify strengths, and rectify weaknesses promptly.",
                    "4": "4. Comprehensive Study Materials: Comprehensive study materials covering all subjects will be provided, eliminating the need for external resources and fostering a focused learning experience.",
                    "5": "5. Personality Enhancement: Beyond academics, we emphasize personality development to enhance communication, leadership, and overall personality traits essential for defense careers.",
                    "6": "6. Physical Training: Physical fitness is integral to defense careers. Customized physical training sessions equip you to meet the physical demands of your chosen path.",
                    "7": "7. Interview Preparation: Our interview readiness modules equip you with the skills and confidence to navigate interviews with finesse, making a lasting impression.",
                    "8": "8. Collaborative Learning Environment: Engage in collaborative learning through group discussions, study circles, and forums, fostering an environment of mutual support and knowledge-sharing.",
          };

          const hideTopicContent = () => {
                    setSelectedTopic(null);
          };

          return (

                              <div className="dec-content">
                                        <h1 style={{ fontSize: "25px", fontWeight: '800', margin: "30px 30px 20px", color: "blue" }}>
                                                  CORE ELEMENTS OF THE COURSE
                                        </h1>
                                        <div className="dec-titles">
                                                  <ul>
                                                            <button onClick={() => handleTopicClick('1')}>
                                                                      <li>1. Expert Faculty</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('2')}>
                                                                      <li>2. Personalized <br /> <p style={{ display: 'inline-block', margin: '0', width: '15px' }}></p>Learning</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('3')}>
                                                                      <li>3. Mock Tests and<br /><p style={{ display: 'inline-block', margin: '0', width: '15px' }}></p>Analysis</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('4')}>
                                                                      <li>4. Comprehensive<br /> <p style={{ display: 'inline-block', margin: '0', width: '15px' }}></p>Study Materials</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('5')}>
                                                                      <li>5. Personality<br /><p style={{ display: 'inline-block', margin: '0', width: '14px' }}></p>Enhancement</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('6')}>
                                                                      <li>6. Physical Training</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('7')}>
                                                                      <li>7. Interview<br /><p style={{ display: 'inline-block', margin: '0', width: '14px' }}></p>Preparation</li>
                                                            </button>
                                                            <button onClick={() => handleTopicClick('8')}>
                                                                      <li>8. Collaborative<br /><p style={{ display: 'inline-block', margin: '0', width: '15px' }}></p>Learning <br /> <p style={{ display: 'inline-block', margin: '0', width: '15px' }}></p>Environment</li>
                                                            </button>
                                                  </ul>
                                        </div>
                                        {selectedTopic && (
                                                  <div>
                                                            <button onClick={hideTopicContent} style={{ cursor: "pointer", fontSize: "20px" }}>
                                                                      X
                                                            </button>
                                                            <p className="topic-para" style={{ margin: "10px 25px", padding: "20px", backgroundColor: "white", color: "black" }}>
                                                                      {topicContent[selectedTopic]}
                                                            </p>
                                                  </div>
                                        )}
                                        {selectedContent && (
                                                  <div>
                                                            {selectedContent === "NCERT" && (
                                                                      <div>
                                                                                Theory CONTENT
                                                                      </div>
                                                            )}
                                                            {selectedContent === "Quiz" && (
                                                                      <div>
                                                                                <p>Quiz Content</p>
                                                                      </div>
                                                            )}
                                                  </div>
                                        )}
                              </div>

          )
}

export default CourseElement;