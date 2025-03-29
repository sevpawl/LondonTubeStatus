import '../../global.css';
import LineStatusBadge from './LineStatusBadge';

const LineStatusTile = ({ title, color }) => {
  return (
    <div className="w-full bg-neutral-200 rounded-full py-3 px-3 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] cursor-pointer transition-all duration-300">
      <div className="bg-neutral-200 rounded-full overflow-hidden shadow-[inset_4px_4px_8px_#00000033,_inset_-4px_-4px_8px_#ffffff80] flex items-center justify-between w-full">
        <div className="flex items-center">
          <div
            className="h-8 w-8 ml-4 rounded-full border-4 border-white flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-gray-600 py-4 pl-6 font-extrabold text-medium font-stretch-105% ml-2">
            {title}
          </span>
        </div>
        <div className="flex items-center">
          <LineStatusBadge></LineStatusBadge>
        </div>
      </div>
    </div>
  );
};

export default LineStatusTile;
