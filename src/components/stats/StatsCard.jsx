import '../../global.css';

const StatsCard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center mb-6">
        <span className="text-3xl font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          overview
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">good service</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
            <span className="text-gray-800 font-bold">1</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">minor delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-yellow-500"></div>
            <span className="text-gray-800 font-bold">2</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">severe delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
            <span className="text-gray-800 font-bold">3</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">part closure</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-600"></div>
            <span className="text-gray-800 font-bold">4</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-semibold">planned</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
            <span className="text-gray-800 font-bold">5</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
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
