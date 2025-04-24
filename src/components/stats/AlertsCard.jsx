import '../../global.css';

const AlertsCard = ( lineColor ) => {
  return (
    <div className="cursor-default overflow-scroll mx-6 my-2">
      <span className="text-3xl ml-20 not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
        alerts
      </span>
      <div className="grid">
        <div className="mt-5 px-3 py-2 rounded-2xl overflow-hidden bg-red-500/80 text-white font-extrabold text-medium font-stretch-105%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
