import '../../global.css';

const Header = () => {
  return (
    <div className="w-screen flex justify-center">
      <header className="flex justify-center rounded-xl min-w-200 max-w-1400 p-6 mx-4 mt-4 mb-20">
        <h1 className="text-[72px] not-first:text-neutral-100/80 font-extrabold drop-shadow-[_-3px_-3px_6px_#ffffff80,_4px_4px_2px_#00000033]">
          underground status
        </h1>
      </header>
    </div>
  );
};

export default Header;
