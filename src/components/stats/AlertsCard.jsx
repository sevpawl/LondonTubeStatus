import '../../global.css';

const AlertsCard = () => {
  return (
    <div className="cursor-default">
      <span className="text-3xl ml-12 not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mt-2">
        alerts
      </span>
      <div className="grid">
        <div className="w-50 h-8 mt-5 pl-6 pt-0.5 rounded-2xl overflow-hidden bg-red-500/80 text-white font-extrabold text-medium font-stretch-105%">
          alert
        </div>
        <div className="w-50 h-8 mt-5 pl-6 pt-0.5 rounded-2xl overflow-hidden bg-red-500/80 text-white font-extrabold text-medium font-stretch-105%">
          alert
        </div>
        <div className="w-50 h-8 mt-5 pl-6 pt-0.5 rounded-2xl overflow-hidden bg-red-500 text-white font-extrabold text-medium font-stretch-105%">
          alert
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
