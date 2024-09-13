import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './App.css'; // custom CSS for better design

function App() {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState('10:00 AM');

  const handleDateChange = (value) => {
    setDateValue(value);
  };

  const handleTimeChange = (time) => {
    setTimeValue(time);
  };

  const displaySelectedDate = () => {
    if (!dateValue) return '';
    const selectedDate = Array.isArray(dateValue) ? dateValue[0] : dateValue;
    return `${selectedDate.toDateString()} at ${timeValue}`;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Select Date and Time</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={dateValue} />
        <TimePicker
          onChange={handleTimeChange}
          value={timeValue}
          disableClock={true}
          format="h:mm a"
          clearIcon={null}
        />
      </div>
      <div className="selected-datetime">
        {dateValue && <p>You selected: {displaySelectedDate()}</p>}
      </div>
    </div>
  );
}

export default App;
