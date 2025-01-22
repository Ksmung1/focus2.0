import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/CalendarStyle.css"; // Add custom styling if needed
import axios from "axios";

// Helper function to normalize date to "YYYY-MM-DD" format (ignores time)
const normalizeDate = (date) => {
  const newDate = new Date(date);
  
  // Check if the date is valid
  if (isNaN(newDate.getTime())) {
    console.error("Invalid date:", date); // Log invalid date for debugging
    return null; // Return null for invalid dates
  }

  newDate.setHours(0, 0, 0, 0); // Set time to midnight to avoid timezone issues
  return newDate.toISOString().split('T')[0]; // Return just the "YYYY-MM-DD" part
};

const ArticleCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [articles, setArticles] = useState({}); // Store articles by date

  const formattedDate = normalizeDate(date); // Normalize current selected date

  useEffect(() => {
    axios.get('http://localhost:5000/focus/articles')
      .then((res) => {
        console.log("Fetched Articles:", res.data);

        // Format articles by date (use 'publishedAt' date)
        const articlesByDate = res.data.reduce((acc, article) => {
          const articleDate = normalizeDate(article.publishedAt); // Normalize article published date (ignores time)
          
          // Only add valid articles
          if (articleDate) {
            acc[articleDate] = article.content; // Assuming article.content holds the article text
          }
          
          return acc;
        }, {});

        setArticles(articlesByDate);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className="calendar-container">
      <h1 style={{ color: "#fe5a1d" }}>Article Calendar</h1>
      <Calendar
        showNeighboringMonth={false} 
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const key = normalizeDate(date); // Normalize the calendar date (ignores time)
          return articles[key] ? <span className="dot">•</span> : null; // If article exists for that day, show dot
        }}
      />
      <div className="article-display">
        <h2 style={{ color: "white" }}>
          {/* Display the article for the normalized selected date */}
          {articles[formattedDate] ? articles[formattedDate] : "No article available for this date."}
        </h2>
      </div>
    </div>
  );
};

export default ArticleCalendar;
