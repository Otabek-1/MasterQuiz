import React from 'react';
import './dashboard.css';

const Schedule = () => {
  // Get the current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // January is 0!
  const currentYear = today.getFullYear();

  // Function to generate the days of the current month and year
  const generateDays = () => {
    const days = [];
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get total days in current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Fill the empty spaces before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<span key={`empty-${i}`} className="empty"></span>);
    }

    // Fill the days of the month
    for (let i = 1; i <= totalDays; i++) {
      const isToday = i === currentDay; // Check if the day is today
      days.push(
        <span key={i} className={isToday ? 'day today' : 'day'}>
          {i}
        </span>
      );
    }
    return days;
  };

  return (
    <div className="schedule-box">
      <div className="tops">
        <span className="month-and-year">{today.toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <i className="fa-solid fa-calendar-days"></i>
      </div>
      <div className="week-days-names">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
      <div className="days-grid">{generateDays()}</div>
    </div>
  );
};

export default Schedule;
