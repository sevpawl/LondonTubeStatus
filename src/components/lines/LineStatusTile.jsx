import '../../global.css';
import LineStatusBadge from './LineStatusBadge';

const LineStatusTile = ({ title, lineColor }) => {
  return (
    <div className="w-full bg-neutral-200 rounded-full p-2 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] transition-all duration-300">
      <div className="bg-neutral-200 rounded-full overflow-hidden shadow-[inset_4px_4px_8px_#00000033,_inset_-4px_-4px_8px_#ffffff80] flex items-center justify-between w-full px-4 py-2">
        <div className="flex items-center">
          <div
            className="h-8 w-8 rounded-full border-4 border-white flex-shrink-0"
            style={{ backgroundColor: lineColor }}
          />
          <span className="text-gray-600 pl-4 font-extrabold text-sm md:text-base cursor-default">
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
