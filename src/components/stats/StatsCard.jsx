import '../../global.css';

const StatsCard = ({ title }) => {
  return (
    <div>
      <div className="text-3xl not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] mt-2 ">
        overview
      </div>
      <div className="mt-7">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">good service</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">minor delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-yellow-500"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">severe delays</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-500"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">part closure</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-red-600"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">planned</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <span className="text-gray-700 font-medium">suspended</span>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-black"></div>
            <span className="text-gray-800 font-bold"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsCard;
