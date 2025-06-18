const StatusCountCardItems = ({
  icon,
  statusType,
  statusCount,
  bgColor,
  onClick,
}) => {
  const content = (
    <div
      className={`w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer`}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`flex items-center justify-center rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2 ${bgColor}`}
        >
          {icon}
        </div>
        <span className="text-gray-600 font-semibold text-sm lowercase px-6">
          {statusType}
        </span>
      </div>
      <span className="text-gray-600 font-bold text-sm lowercase mr-2">
        {statusCount}
      </span>
    </div>
  );

  return onClick ? (
    <button
      onClick={onClick}
      className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg bg-transparent border-none p-0 m-0"
      style={{ boxShadow: 'none', background: 'none' }}
      tabIndex={0}
    >
      {content}
    </button>
  ) : (
    content
  );
};

export default StatusCountCardItems;
