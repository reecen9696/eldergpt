import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon.svg'; 
import HomeIconWhite from '../icons/HomeIcon-white.svg'; 
import ScheduleIcon from '../icons/ScheduleIcon.svg';
import ScheduleIconWhite from '../icons/ScheduleIcon-white.svg'; 
import SettingsIcon from '../icons/SettingsIcon.svg';
import SettingsIconWhite from '../icons/SettingsIcon-white.svg';

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
<nav className="bg-highlight z-30 text-font py-[2vh] w-1/2 mx-auto fixed bottom-[3vh] left-0 right-0 flex justify-around rounded-full">
      
      {/* Home Link */}
      <Link to="/main" className="flex flex-col items-center relative">
        {isActive('/main') && (
          <div 
            className="absolute w-[60px] h-[60px] bg-buttons rounded-full -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[2px] z-0 transition-all duration-1000 ease-in-out"
          ></div>
        )}
        <img
          src={isActive('/main') ? HomeIconWhite : HomeIcon}
          alt="Home"
          className={`w-7 h-7 mb-1 relative z-10 transition-all duration-1000 ease-in-out ${isActive('/main') ? 'opacity-100' : 'opacity-50'} translate-y-[2px]`}
        />
      </Link>

      {/* Schedule Link */}
      <Link to="/schedule" className="flex flex-col items-center relative">
        {isActive('/schedule') && (
          <div 
            className="absolute w-[60px] h-[60px] bg-buttons rounded-full -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[2px] z-0 transition-all duration-1000 ease-in-out"
          ></div>
        )}
        <img
          src={isActive('/schedule') ? ScheduleIconWhite : ScheduleIcon}
          alt="Schedule"
          className={`w-7 h-7 mb-1 relative z-10 transition-all duration-1000 ease-in-out ${isActive('/schedule') ? 'opacity-100' : 'opacity-50'} translate-y-[2px]`}
        />
      </Link>

      {/* Settings Link */}
      <Link to="/settings" className="flex flex-col items-center relative">
        {isActive('/settings') && (
          <div 
            className="absolute w-[60px] h-[60px] bg-buttons rounded-full -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[2px] z-0 transition-all duration-1000 ease-in-out"
          ></div>
        )}
        <img
          src={isActive('/settings') ? SettingsIconWhite : SettingsIcon}
          alt="Settings"
          className={`w-7 h-7 mb-1 relative z-10 transition-all duration-1000 ease-in-out ${isActive('/settings') ? 'opacity-100' : 'opacity-50'} translate-y-[2px]`}
        />
      </Link>

    </nav>
  );
}

export default NavBar;  