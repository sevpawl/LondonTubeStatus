import '../../global.css';

const Header = () => {
  const HandleRefresh = () => {
    console.log('about to reload page');
    window.location.reload();
    console.log('page reloaded');
  };

  return (
    <div className="w-full flex flex-col justify-between py-8">
      <header className="flex items-center justify-start mb-10 mt-6 ml-40">
        <h1 className="flex max-w-3.5 ml-24 mr-20 text-[58px] leading-16 not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033] cursor-default">
          underground status
        </h1>
        <div className="ml-200 flex items-center">
          <div>
            <div className="font-small font-bold white">last updated: </div>
            <button
              onClick={HandleRefresh}
              className="mt-4 px-4 py-1.5 rounded-lg bg-neutral-200 text-gray-600 font-extrabold text-small cursor-pointer shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500"
            >
              refresh
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
