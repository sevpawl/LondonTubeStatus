import '../../global.css';

const Card = ({ children }) => {
  return (
    <div className="w-88 h-88 bg-neutral-200 flex items-center justify-center rounded-3xl py-3 px-3 shadow-[8px_8px_8px_#b8b8b8,-8px_-8px_8px_#ffffff80] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] transition-all duration-300">
      <div className="w-80 h-80 flex justify-center py-1 px-1 bg-neutral-200 rounded-2xl shadow-[inset_4px_4px_3px_#00000033,_inset_-4px_-4px_3px_#ffffff80]">
        {children}
      </div>
    </div>
  );
};

export default Card;
