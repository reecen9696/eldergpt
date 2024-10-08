import React, { useState } from 'react';
import ChevronIcon from '../icons/chevron.svg';
import CalendarBar from '../components/CalendarBar';
import Sliders from '../components/Sliders';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Schedule() {
  const [showTimePicker, setShowTimePicker] = useState(false); // State to show/hide time picker
  const [selectedTime, setSelectedTime] = useState(dayjs()); // Track the selected time

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker); // Toggle visibility of time picker
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime); // Update the selected time
  };

  return (
    <div className="min-h-screen flex flex-col justify-end text-font">
      
      <div className="relative bg-highlight mb-2 min-h-[40vh] flex flex-col rounded-b-[5vh] justify-end overflow-hidden">
      <div className="flex flex-col items-center mb-5 mt-3">
          <b className="text-subtitle">Schedule</b>
          <p>How often check-ins occur.</p>
        </div>

        <CalendarBar />

        {/* Repeat Section */}
        <div className="relative z-20 w-[88%] mx-auto bg-background rounded-[15px] min-h-custom-50 flex flex-row items-center justify-between mb-2 px-7">
          <b className="text-subtitle">Repeat</b>
          <div className="flex flex-row">
            <p>every day</p>
            <img src={ChevronIcon} alt="Chevron icon" className="ml-2" />
          </div>
        </div>

        {/* Time Section */}
        <div className="relative z-20 w-[88%] mx-auto bg-background rounded-[15px] min-h-custom-50 flex flex-row items-center justify-between mb-6 px-7">
          <b className="text-subtitle">Time</b>
          <div className="flex flex-row" onClick={toggleTimePicker}>
            <p>{selectedTime ? selectedTime.format('hh:mm A') : '9:00'}</p>
            <img src={ChevronIcon} alt="Chevron icon" className="ml-2" />
          </div>
        </div>

        {/* Time Picker */}
        {showTimePicker && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              value={selectedTime}
              onChange={handleTimeChange} // Update time without closing
              onAccept={() => setShowTimePicker(false)} // Close when "OK" is clicked
              onClose={() => setShowTimePicker(false)} // Ensure it closes on explicit close
              open={true} // Keep it open while interacting
              renderInput={() => null} // No extra input element
            />
          </LocalizationProvider>
        )}
      </div>

      {/* Bottom Section */}
   {/* Bottom Section */}
<div className="relative z-10 bg-background min-h-[20vh] max-h-[40vh] rounded-[5vh] mb-[100vh] overflow-hidden">
  {/* Animated Circle elements */}
  <div className="absolute bg-buttons rounded-full w-[60vw] h-[60vw] -top-[30vw] -right-[5vw] z-10 transform animate-fast-bounce"></div>
  <div className="absolute bg-buttons rounded-full w-[60vw] h-[60vw] top-[20%] -left-[20vw] z-10 transform animate-fast-bounce"></div>
  <div className="absolute bg-buttons rounded-full w-[60vw] h-[60vw] top-[50%] -right-[10vw] z-10 transform animate-fast-bounce"></div>

  {/* Care Section with Backdrop Blur */}
  <div className="relative z-30 bg-highlight bg-opacity-30 backdrop-blur-md px-[5vw] py-[5vw] min-h-[50vh] max-h-[100vh]" style={{ WebkitBackdropFilter: "blur(15px)", backdropFilter: "blur(15px)" }}>
    <div className="flex flex-col items-center mb-3 justify-center">
      <b className="text-subtitle">Care</b>
      <p>Key areas to address during</p>
      <p>the next check-in.</p>
    </div>
    <Sliders />
  </div>



</div>
    </div>
  );
}

export default Schedule;