// src/components/CalendarBar.js
import { useState } from 'react';
import { format, addWeeks, subWeeks, startOfWeek, addDays } from 'date-fns';
import ChevronLeftIcon from '../icons/chevron-left.svg'; // Left arrow
import ChevronRightIcon from '../icons/chevron-right.svg'; // Right arrow

function CalendarBar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const datesOfWeek = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  const prevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  return (
    <div className="flex flex-col items-center space-y-2 mb-6 ">
      {/* Days of the week */}
      <div className="flex justify-between w-[86%] px-3">
        {daysOfWeek.map((day, index) => (
          <p key={index} className="text-sm text-center text-calendar flex-1">
            {day}
          </p>
        ))}
      </div>

      {/* White rectangle with dates and chevrons */}
      <div className="bg-white p-3 rounded-full flex items-center text-calendar justify-between w-[88%] relative">
       {/* Left Arrow */}
        <button onClick={prevWeek} className="absolute left-0 ml-0 z-10"> {/* Ensure z-10 */}
            <img src={ChevronLeftIcon} alt="Previous Week" className="w-6 h-6" />
        </button>

        {/* Dates */}
        <div className="flex justify-around w-full px-2 relative">
          {datesOfWeek.map((date, index) => (
            <div key={index} className="text-center flex-1 relative">
              {/* Add the blue circle behind Friday and style the date */}
              {index === 4 && ( // Show the blue circle under the Friday date
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-10 h-10 bg-buttons rounded-full absolute z-0 transform translate-x-0.45"></div>
                </div>
              )}
              <p
                className={`text-m relative z-10 ${
                  index === 4 ? 'text-white font-bold' : ''
                }`}
              >
                {format(date, 'd')}
              </p> {/* Date number */}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={nextWeek} className="absolute right-0 mr-0">
          <img src={ChevronRightIcon} alt="Next Week" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default CalendarBar;