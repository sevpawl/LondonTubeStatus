import '../../global.css';

const Card = ({ children }) => {
  return (
    <div className="w-full max-w-sm h-auto min-h-[320px] min-w-[320px] bg-neutral-transparent flex items-center justify-center rounded-3xl p-3 shadow-[8px_8px_8px_#b8b8b8,-8px_-8px_8px_#ffffff80] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] transition-all duration-300">
      <div className="w-full h-full min-h-[300px] flex justify-center p-4 bg-neutral-200 rounded-2xl shadow-[inset_4px_4px_3px_#00000033,_inset_-4px_-4px_3px_#ffffff80]">
        {children}
      </div>
    </div>
  );
};

export default Card;