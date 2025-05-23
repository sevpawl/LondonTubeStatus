import { useEffect, useState } from 'react';
import { fetchTubeStatus, getStatusDescriptions } from '../../services/api';
import { lineColors } from '../../utils/Colors';
import '../../global.css';

const AlertsCard = (lineColor) => {
  const [description, setAlertsDescriptions] = useState([]);

  useEffect(() => {
    console.log('AlertsCard loaded');

    const fetchAlertsCardData = async () => {
      try {
        const data = await fetchTubeStatus();
        let description = getStatusDescriptions(data);
        console.log('Alerts array:', description);
        setAlertsDescriptions(description);
      } catch (error) {
        console.log('error fetching alerts card data: ', error);
      }
    };
    fetchAlertsCardData();
  }, []);

  return (
    <div className="cursor-default w-full h-full px-4 py-2">
      <div className="flex items-center justify-center mb-6 md:mb-6">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          alerts
        </span>
      </div>
      <div className="grid gap-3 overflow-y-auto max-h-[200px] bg-neutral-100/80 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
        {description.length > 0 ? (
          (alertText, position) => (
            <div
              key={position}
              className={`justify-center px-4 py-4 rounded-2xl ${lineColors[lineColor]} text-neutral-600 font-semibold text-sm`}
            >
              {alertText}
            </div>
          )
        ) : (
          <div
            className={`justify-center px-4 py-4 rounded-2x ${lineColors[lineColor]}  text-neutral-600 font-semibold text-sm`}
          >
            good service on all lines
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertsCard;
