import '../../global.css';

const StatsCard = () => {
  return (
    <div className="cursor-default">
      <div className="text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mt-2 flex justify-center">
        overview
      </div>
      <div className="mt-7">
        <div className="flex items-center justify-between gap-13 mb-2">
          <span className="text-gray-600 font-semibold">good service</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
            <span className="text-gray-800 font-bold">1</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-semibold">minor delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-yellow-500"></div>
            <span className="text-gray-800 font-bold">2</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-semibold">severe delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
            <span className="text-gray-800 font-bold">3</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-semibold">part closure</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-600"></div>
            <span className="text-gray-800 font-bold">4</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-semibold">planned</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
            <span className="text-gray-800 font-bold">5</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-semibold">suspended</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-black"></div>
            <span className="text-gray-800 font-bold">6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
