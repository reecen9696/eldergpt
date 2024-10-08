import React from 'react';
import './HealthSummary.css'; // Import the updated styles

function HealthSummary({ label, status, percentage }) {
  // Toggle styles based on percentage
  const boxStyle =
    percentage > 80
      ? 'bg-buttons text-background'
      : 'bg-white text-font';

  return (
    <div className="flex flex-col items-center w-28 h-64 max-h-[180px] rounded-[15px] overflow-hidden mt-3">
      {/* Health Box Container */}
      <div className="relative w-full h-full bg-background rounded-lg p-2 flex flex-col justify-between"> {/* Added flex here */}
        {/* Title at the Top */}
        <div className="text-sm text-font text-center">
          <span className="text-sm font-bold">{label}</span>
        </div>

        {/* Permanent Grey Box */}
        <div className="relative w-full h-full bg-gray-200 rounded-[15px] p-[3px] flex items-center justify-center mt-3">
          {/* Status Box at the Bottom */}
          <div
            className={`w-full h-full rounded-[10px] flex items-center justify-center progress-wrapper ${boxStyle}`}
            style={{ height: '100%' }} // Adjust height of the status box
          >
            <span className="text-center">{status}</span>

            {/* Progress Line */}
            <div className="progress-line" style={{ '--progress': `${percentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthSummaries() {
  return (
    <div className="flex justify-between items-center w-full space-x-2">
      <HealthSummary label="Physical Health" status="Great" percentage={100} />
      <HealthSummary label="Mental Health" status="Good" percentage={50} />
      <HealthSummary label="Social Life" status="Great" percentage={100} />
      <HealthSummary label="Cognitive Health" status="Bad" percentage={5} />
    </div>
  );
}

export default HealthSummaries;