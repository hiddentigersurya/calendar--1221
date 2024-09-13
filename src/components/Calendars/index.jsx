import { useState } from 'react';
import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './index.css'; 

function Calendars() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState('10:10 AM');
  const [toTime, setToTime] = useState('05:10 PM');

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleFromTimeChange = (time) => {
    setFromTime(time);
  };

  const handleToTimeChange = (time) => {
    setToTime(time);
  };

  const displaySelectedDateTimeRange = () => {
    if (!fromDate || !toDate) return '';
    return `From (${fromDate.toDateString()}) at ${fromTime} to (${toDate.toDateString()}) at ${toTime}`;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Select Date and Time Range</h1>
      <div className="date-time-container">
        <div className="from-date-container">
          <h2>From Date</h2>
          <Calendar
            onChange={handleFromDateChange}
            value={fromDate}
          />
          <h3>From Time</h3>
          <TimePicker
            onChange={handleFromTimeChange}
            value={fromTime}
            disableClock={true}
            format="h:mm a"
            clearIcon={null}
          />
        </div>
        <div className="to-date-container">
          <h2>To Date</h2>
          <Calendar
            onChange={handleToDateChange}
            value={toDate}
          />
          <h3>To Time</h3>
          <TimePicker
            onChange={handleToTimeChange}
            value={toTime}
            disableClock={true}
            format="h:mm a"
            clearIcon={null}
          />
        </div>
      </div>
      <div className="selected-datetime">
        {fromDate && toDate && <p>You selected: {displaySelectedDateTimeRange()}</p>}
      </div>
    </div>
  );
}

export default Calendars;
