import profileImage from '../assets/profile.png';
import checkIn from '../assets/checkin.png';
import arrow from '../icons/arrow.svg';
import HealthSummaries from '../components/HealthSummary';


function Main() {
  return (
    <div className="min-h-screen flex flex-col justify-end text-font">
      
      <div className="relative bg-background mb-2 flex-grow min-h-[20vh] md:min-h-[50vh] flex flex-col rounded-b-custom justify-end overflow-hidden">        
     
  {/* Circle 1 */}
<div className="absolute bg-buttons rounded-full w-[70vw] h-[70vw] -top-[45vw] right-[10vw] transform -translate-y-1/2 animate-slow-bounce"></div>

{/* Circle 2 */}
<div className="absolute bg-buttons rounded-full w-[70vw] h-[70vw] top-[20vw] -left-[20vw] animate-slow-bounce"></div>

{/* Circle 3 */}
<div className="absolute bg-buttons rounded-full w-[70vw] h-[70vw] top-[20vw] -right-[30vw] animate-slow-bounce"></div>

       
        <div className="relative z-10 bg-highlight/30 backdrop-blur h-20 rounded-full flex flex-row items-center justify-between px-7 text-background">
          <div className="flex-col">
            <b className="text-title leading-tight">Peter John</b>
            <p className="leading-tight">78 years</p>
          </div>
          <img 
            src={profileImage} 
            alt="Peter John" 
            className="h-[80%] aspect-square rounded-full object-cover"
          />
        </div>

      </div>

 
      <div className="bg-highlight min-h-custom-50 rounded-full mb-2 flex flex-row items-center justify-between px-7">
        <b className="text-subtitle" >Last check-in</b>
        <p>3 days ago</p>
      </div>
      
       {/* Check-in section that fills remaining space minus the navbar height */}
       <div className="bg-highlight flex-grow rounded-[50px] mb-[20vh] px-7 py-[2vh]">
       <div className="flex-col">
      {/* Title and Arrow */}
      <div className="flex flex-row justify-between">
        <b className="text-subtitle">Check-in</b>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="flex flex-col mt-3 mb-5 justify-center">
        <p>Peter reported feeling generally well.</p>
        <p>Peter wants you to call him on Tuesday.</p>
      </div>
      <img 
        src={checkIn} 
        alt="Checkin" 
        className="h-[80%] object-cover"
      />
    </div>
     
      </div>
    </div>
  );
}

export default Main;
