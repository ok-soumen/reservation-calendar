import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles'; // Updated import statement
import AvailabilityCalendar from 'availability-calendar-react';

const MyCalendar = () => {
  // Define your available dates and times
  const availableDates = [
    {
      date: '2023-05-25',
      times: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
    },
    {
      date: '2023-05-26',
      times: ['9:00 AM', '10:00 AM', '11:00 AM'],
    },
    {
      date: '2023-05-27',
      times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
    },
  ];

  // State to track selected date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Create Material-UI theme
  const theme = createTheme(); // Using the updated createTheme function

  return (
    <div>
      <h1>Availability Calendar</h1>
      <AvailabilityCalendar
        availableDates={availableDates.map((dateObj) => dateObj.date)}
        onDateSelect={handleDateSelect}
        theme={theme} // Pass the theme to the AvailabilityCalendar component
      />

      {selectedDate && (
        <div>
          <h2>Available Times for {selectedDate}</h2>
          <ul>
            {availableDates
              .find((dateObj) => dateObj.date === selectedDate)
              .times.map((time) => (
                <li key={time} onClick={() => handleTimeSelect(time)}>
                  {time}
                </li>
              ))}
          </ul>
        </div>
      )}

      {selectedTime && <p>Selected Time: {selectedTime}</p>}
    </div>
  );
};

export default MyCalendar;
