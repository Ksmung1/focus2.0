import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLock } from "react-icons/fa";
// Sample data array with different dates
const currentAffairsData = [
  {
    id: 1,
    title: "Global Summit 2024",
    content: "World leaders gather for the annual global summit to discuss climate change and sustainability.",
    publishedAt: "COMING SOON"
  }
//   {
//     id: 2,
//     title: "Breakthrough in AI Technology",
//     content: "A new AI model achieves state-of-the-art performance in natural language processing.",
//     publishedAt: "2024-06-16"
//   },
//   {
//     id: 3,
//     title: "Stock Market Hits Record High",
//     content: "The stock market reached an all-time high amid economic recovery signs.",
//     publishedAt: "2024-06-17"
//   },
//   {
//     id: 4,
//     title: "SpaceX Launches New Satellite",
//     content: "SpaceX successfully launched its new communication satellite for global internet coverage.",
//     publishedAt: "2024-05-18"
//   }
];

// Group news by month
const groupByMonth = (data) => {
  const grouped = {};
  // eslint-disable-next-line
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  data.forEach(item => {
    const [year, month] = item.publishedAt.split('-'); // Extract YYYY and MM
    const monthYear = `${year}-${month}`; // Store as YYYY-MM for internal use

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(item);
  });

  return grouped;
};

const groupedNews = groupByMonth(currentAffairsData);

// Card Component
const Card = ({ title, content }) => (
  <div className='Card' style={cardStyle}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// GoalDigger Component
const GoalDigger = () => {
  // eslint-disable-next-line
  const [viewMode, setViewMode] = useState('daily'); // daily or monthly
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedMonthlyDate, setSelectedMonthlyDate] = useState(null);

  return (
    <div className='GoalDigger'>
      <h1>Daily & Monthly Current Affairs</h1>
      <p style={{color:'red'}}>Coming soon</p>
      <FaLock style={{fontSize: '100px'}}/>
      {/* View Mode Switcher */}
      <div style={viewSwitcherStyle}>
        <button
          // onClick={() => { setViewMode('daily'); setSelectedDate(null); }}
          style={viewMode === 'daily' ? activeButtonStyle : buttonStyle}
        >
          Daily
        </button>
        <button
          // onClick={() => { setViewMode('monthly'); setSelectedMonth(null); }}
          style={viewMode === 'monthly' ? activeButtonStyle : buttonStyle}
        >
          Monthly
        </button>
      </div>

      {/* Daily View */}
      {viewMode === 'daily' && !selectedDate && (
        <div className='goal-news flex col'>
          {currentAffairsData.map((news) => (
            <button 
              key={news.id} 
              // onClick={() => setSelectedDate(news.publishedAt)} 
              style={buttonStyle}
            >
              {news.publishedAt}
              <MdKeyboardArrowRight />
            </button>
          ))}
        </div>
      )}

      {/* Show News for Selected Date */}
      {selectedDate && (
        <div>
          <button onClick={() => setSelectedDate(null)} style={backButtonStyle}>
            ⬅ Back to Dates
          </button>
          <h2>Current Affairs for {selectedDate}</h2>
          {currentAffairsData
            .filter(news => news.publishedAt === selectedDate)
            .map(news => (
              <Card key={news.id} title={news.title} content={news.content} />
            ))
          }
        </div>
      )}

      {/* Monthly View */}
      {viewMode === 'monthly' && !selectedMonth && (
        <div className='goal-news flex col'>
          {Object.keys(groupedNews).map(monthYear => {
            const [year, month] = monthYear.split('-');
            const months = [
              "January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"
            ];
            const monthName = months[parseInt(month, 10) - 1]; // Convert to full month name
            return (
              <button 
                key={monthYear} 
                // onClick={() => setSelectedMonth(monthYear)} 
                style={buttonStyle}
              >
                {`${year} ${monthName}`}  {/* Display full month name */}
                <MdKeyboardArrowRight />
              </button>
            );
          })}
        </div>
      )}

      {/* Show Dates for the Selected Month */}
      {selectedMonth && !selectedMonthlyDate && (
        <div>
          <button onClick={() => setSelectedMonth(null)} style={backButtonStyle}>
            ⬅ Back to Months
          </button>
          <h2>Dates in {selectedMonth}</h2>
          {groupedNews[selectedMonth].map(news => (
            <button 
              key={news.id} 
              onClick={() => setSelectedMonthlyDate(news.publishedAt)} 
              style={buttonStyle}
            >
              {news.publishedAt}
              <MdKeyboardArrowRight />
            </button>
          ))}
        </div>
      )}

      {/* Show News for Selected Date in Monthly View */}
      {selectedMonthlyDate && (
        <div>
          <button 
            onClick={() => setSelectedMonthlyDate(null)} 
            style={backButtonStyle}
          >
            ⬅ Back to {selectedMonth}
          </button>
          <h2>Current Affairs for {selectedMonthlyDate}</h2>
          {currentAffairsData
            .filter(news => news.publishedAt === selectedMonthlyDate)
            .map(news => (
              <Card key={news.id} title={news.title} content={news.content} />
            ))
          }
        </div>
      )}
    </div>
  );
};

// Inline CSS for styling
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px 0',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};

const buttonStyle = {
  padding: '10px 15px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd'
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#2196F3',
  color: 'white'
};

const backButtonStyle = {
  padding: '10px 15px',
  margin: '10px 0',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd',
  backgroundColor: '#f44336',
  color: 'white'
};

const viewSwitcherStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  margin: '20px 0'
};

export default GoalDigger;
