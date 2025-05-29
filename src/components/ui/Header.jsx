import '../../global.css';
import { useState, useEffect } from 'react';
import { getCurrentTime } from '../../services/lastUpdated';
import Clock from './Clock';
import { Train } from 'lucide-react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  const HandleRefresh = () => {
    window.location.reload();
    setCurrentTime(getCurrentTime());
  };

  return (
    <div className="w-full flex flex-col justify-between py-4 md:py-8 mb-14">
      <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-4">
        {/* <Clock></Clock> */}
        <Train size={56}></Train>
        <h1 className="text-3xl md:text-4xl lg:text-6xl not-first:text-neutral-100 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] cursor-default text-center md:text-left">
          underground status
        </h1>

        <div className="flex items-center mt-4.5">
          <div className="text-center md:text-left">
            <button
              onClick={HandleRefresh}
              className="md:mt-4 px-4 py-1.5 bg-neutral-200 text-gray-600 font-extrabold text-small cursor-pointer shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500 bg-stone-transparent backdrop-blur-sm rounded-lg"
            >
              refresh
            </button>
            <div className="font-small mt-2.5 font-bold white">
              last updated: {currentTime}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
