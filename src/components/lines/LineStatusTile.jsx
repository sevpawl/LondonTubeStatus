import '../../global.css';

const LineStatusTile = ({ title, color, status }) => {
  return (
    <div className=" aboslute w-200px bg-neutral-200 rounded-full py-3 px-3 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffff]">
      <div className="relative bg-neutral-200 rounded-full overflow-hidden shadow-[inset_4px_4px_8px_#00000033,_inset_-4px_-4px_8px_#ffffff80] flex items-center w-full justify-start">
        <div className="h-8 w-8 ml-4 rounded-full " style={{ backgroundColor: color }} />
        <span className="text-gray-500 py-4 pl-6 font-extrabold text-medium font-stretch-105% ml-4">
          {title}
        </span>
      </div>
    </div>
  );
};

export default LineStatusTile;
