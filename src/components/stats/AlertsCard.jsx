import { useEffect, useState } from 'react';
import { getAlerts } from '../../services/api';
import '../../global.css';

const AlertsCard = ({ linesData = [] }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const alertsData = getAlerts(linesData);
    setAlerts(alertsData);
  }, [linesData]);

  const hasAlerts = alerts.length > 0;

  return (
    <div className="cursor-default w-full max-h-[400px] overflow-hidden px-3 py-2">
      <div className="flex items-center justify-center mb-6 md:mb-6">
        <span className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          {hasAlerts ? 'alerts' : 'no alerts'}
        </span>
      </div>
      {hasAlerts && (
        <div className="mt-[-9px] overflow-y-auto max-h-[330px]">
          {alerts.map((alert, position) => (
            <div
              key={position}
              className="my-4 px-4 py-3 rounded-lg transition-transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer border-l-8 bg-neutral-100/80"
              style={{ borderLeftColor: alert.color }}
            >
              <div className="font-bold text-sm text-gray-800 mb-1">
                {alert.name}
              </div>
              <div className="text-xs text-gray-600">{alert.reason}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertsCard;
