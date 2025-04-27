import '../../global.css';

const ChartCard = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center cursor-default">
      <div className="text-2xl md:text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mb-4 md:mb-6">
        charts
      </div>
      <div className="flex-1 w-full px-4">{/* content */}</div>
    </div>
  );
};

export default ChartCard;
