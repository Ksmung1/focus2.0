import React, { useState } from "react";
import { Link } from "react-router-dom";
import './HomePageShortCuts.css'
import Card from "./Card";
import DigitalClock from "../Calendar/Clock";
import MyCalendar from "../Calendar/Calendar";
import Quotes from "../DailyQuotes/Quote";

function HomepageShortCuts() {

          const cardData = [
                    { link: "/currentAffairs", emoji: "🌍", img: "./images/currrentaffairs.png", paragraph: "Current Affairs", cardColor: 'card1', },
                    { link: "/news", emoji: "📰 ", img: "./images/news.png", paragraph: "Newspaper", cardColor: 'card3', },
                    { link: "/magazines", emoji: "📙 ", img: "./images/magazines.png", paragraph: "Magazines", cardColor: 'card5', },
                    // { link: "/ncert", emoji: "📚 ", img: "./images/exams.png", paragraph: "NCERT", cardColor: 'card2', },
                    // { link: "/quiz", emoji: "🧠 ", img: "./images/quiz.png", paragraph: "Daily Quizzes", cardColor: 'card4', },
                    { link: "/generalAwareness", emoji: "💡 ", img: "./images/quiz.png", paragraph: "General Awareness", cardColor: 'card6', },
                    { link: "/job", emoji: "💼 ", img: "./images/job.png", paragraph: "Employment News", cardColor: 'card7' },
                    { link: "/careerGuidance", emoji: "🚀 ", img: "./images/personalitydev.png", paragraph: "Career Guidance", cardColor: 'card8', },
          ];

          const [openCardIndex, setOpenCardIndex] = useState(null);

          const handleCardClick = (index) => {
                    if (openCardIndex === index) {
                              // If the same card is clicked again, close it
                              setOpenCardIndex(null);
                    } else {
                              // If a different card is clicked, open it and close the previously open one
                              setOpenCardIndex(index);
                    }
          };

          return (
                    <div className="homepage-shortcut">


                              <div class="cards-container" style={{ display: 'none' }}>
                                        {cardData.map((card, index) => (
                                                  <div key={index} className="card-wrappers">
                                                            <Card
                                                                      img={card.img}
                                                                      paragraph={card.paragraph}
                                                                      cardColor={card.cardColor}
                                                                      isOpen={openCardIndex === index}
                                                                      link={card.link}
                                                            ></Card>
                                                  </div>
                                        ))}
                              </div>

                    </div>
          )
}

export default HomepageShortCuts;