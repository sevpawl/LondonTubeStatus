import '../../global.css';

const Header = () => {
  return (
    <div className="w-full max-w-6xl flex flex-col justify-between items-center py-8">
      <header className="flex items-center justify-start mb-4">
        <h1 className="ml-40 text-[72px] not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          underground status
        </h1>
        <button className="ml-52 mt-4 px-6 py-2 rounded-lg bg-neutral-200 text-gray-500 font-extrabold text-medium cursor-pointer shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500">
          refresh
        </button>
      </header>
    </div>
  );
};

export default Header;
