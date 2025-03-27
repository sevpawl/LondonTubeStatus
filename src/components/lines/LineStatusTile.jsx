import '../../global.css';

const LineStatusTile = () => {
  return (
    <div className=" aboslute w-200px bg-neutral-200 rounded-full mt-10 py-3 px-3 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffff]">
      <div className="relative bg-neutral-200 rounded-full py-4 px-6 shadow-[inset_4px_4px_8px_#00000033,_inset_-4px_-4px_8px_#ffffff80] flex items-center w-full justify-start">
        <span className="text-gray-500 font-extrabold text-medium font-stretch-105% ml-4">
          line status tile
        </span>
      </div>
    </div>
  );
};

export default LineStatusTile;
