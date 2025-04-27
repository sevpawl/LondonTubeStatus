import { useEffect, useState } from 'react';
import fetchTubeStatus from '../../services/api';
import '../../global.css';

const AlertsCard = (lineColor) => {
  const [disruptions, setDisruptions] = useState([]);

  useEffect(() => {
    console.log('AlertsCard loaded');

    fetchTubeStatus().then((data) => {
      setDisruptions();
    });
  }, []);

  return (
    <div className="cursor-default overflow-auto w-full h-full px-4 py-2">
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          alerts
        </span>
      </div>
      <div className="grid gap-3">
        <div className="px-3 py-2 rounded-2xl overflow-hidden bg-red-500/80 text-white font-extrabold text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
