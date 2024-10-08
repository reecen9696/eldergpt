import { useState, useEffect } from 'react';

// Debounce function to limit how frequently the slider value is updated
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function Slider({ label, value, onChange }) {
    const debouncedOnChange = debounce(onChange, 8); // Debounced function for smoother updates
  
    return (
      <div className="flex flex-col items-center w-[20vw] h-[24vh] sm:w-[15vw] sm:h-[20vh] rounded-[15px] overflow-hidden">
        {/* Slider Container */}
        <div className="relative w-full h-full bg-highlight rounded-lg">
          {/* Foreground (adjustable height based on value) */}
          <div
            style={{ height: `${value}%` }}
            className="absolute bottom-0 left-0 right-0 bg-buttons rounded-[15px] flex items-end justify-center p-2"
          >
            {/* Text Label inside the blue div */}
            <span className="text-background text-center text-xs sm:text-sm">{label}</span>
          </div>
  
          {/* Slider Input */}
          <input
            type="range"
            min="30"
            max="100"
            value={value}
            step="1"
            onChange={(e) => debouncedOnChange(Number(e.target.value))}
            className="absolute w-full h-full opacity-0 cursor-pointer"
            style={{ writingMode: 'bt-lr', transform: 'rotate(270deg)' }} // Vertical slider
          />
        </div>
      </div>
    );
}


function Sliders() {
  const [physicalHealth, setPhysicalHealth] = useState(50);
  const [mentalHealth, setMentalHealth] = useState(50);
  const [socialLife, setSocialLife] = useState(50);
  const [cognitiveHealth, setCognitiveHealth] = useState(50);

  const totalPercentage = physicalHealth + mentalHealth + socialLife + cognitiveHealth;
  const targetTotal = 200;
  const minValue = 0;

  useEffect(() => {

    if (totalPercentage > targetTotal) {
      const excess = totalPercentage - targetTotal;
      let values = [physicalHealth, mentalHealth, socialLife, cognitiveHealth];
      let adjustableValues = values.filter(value => value > minValue); // Only adjust sliders above the minimum

      // Redistribute the excess gradually by calculating a proportionate reduction for each slider
      const adjustAmount = excess / adjustableValues.length;

      const adjustedValues = adjustableValues.map(value => {
        const newValue = Math.max(minValue, value - adjustAmount); // Ensure no value goes below the minimum
        return newValue;
      });

      // Update the state values accordingly with smooth transitions
      setPhysicalHealth(adjustedValues[0] || physicalHealth);
      setMentalHealth(adjustedValues[1] || mentalHealth);
      setSocialLife(adjustedValues[2] || socialLife);
      setCognitiveHealth(adjustedValues[3] || cognitiveHealth);
    }
  }, [physicalHealth, mentalHealth, socialLife, cognitiveHealth, totalPercentage]);

  return (
<div className="flex justify-between items-center w-full h-full space-x-2">
  <Slider label="Physical Health" value={physicalHealth} onChange={setPhysicalHealth} />
  <Slider label="Mental Health" value={mentalHealth} onChange={setMentalHealth} />
  <Slider label="Social Life" value={socialLife} onChange={setSocialLife} />
  <Slider label="Cognitive Health" value={cognitiveHealth} onChange={setCognitiveHealth} />
</div>

  );
}

export default Sliders;