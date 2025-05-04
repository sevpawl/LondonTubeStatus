import { useEffect, useState } from 'react';
import { fetchTubeStatus, getStatusDescriptions } from '../../services/api';
import '../../global.css';

const AlertsCard = (lineColor) => {
  const [descriptions, setAlertsDescriptions] = useState([]);

  useEffect(() => {
    console.log('AlertsCard loaded');

    const fetchAlertsCardData = async () => {
      try {
        const data = await fetchTubeStatus();
        const descriptions = getStatusDescriptions(data);
        setAlertsDescriptions(descriptions);
      } catch (error) {
        console.log('error fetching alerts card data: ', error);
      }
    };
    fetchAlertsCardData();
  }, []);

  return (
    <div className="cursor-default w-full h-full px-4 py-2">
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          alerts
        </span>
      </div>
      <div className="grid gap-3 overflow-y-auto max-h-[200px]">
        <div className="px-3 py-2 rounded-2xl bg-red-500/80 text-white font-extrabold text-sm text-md">
          {descriptions}
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
