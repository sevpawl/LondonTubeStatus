import '../../global.css';

const Card = () => {
  return (
    <div className="w-72 h-72 bg-gray-200 flex items-center justify-center rounded-3xl py-3 px-3 shadow-[8px_8px_12px_#b8b8b8,-8px_-8px_16px_#ffff]">
      <div className=" w-64 h-64 py-3 px-3 bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_#00000033,_inset_-4px_-4px_8px_#ffffff80]" />
    </div>
  );
};

export default Card;
