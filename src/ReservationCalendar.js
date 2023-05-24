import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAvailableTimes(date);
  };

  const fetchAvailableTimes = (date) => {
    // Your logic to fetch available times based on the selected date
    // Update the availableTimes state with the fetched times
    // For example:
    const times = ['10:00 AM', '11:00 AM', '12:00 PM'];
    setAvailableTimes(times);
  };

  return (
    <div>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <ul>
        {availableTimes.map((time) => (
          <li key={time}>{time}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationCalendar;
