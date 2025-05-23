const StatusCountCardItems = ({ icon, statusType, statusCount, bgColor }) => {
  return (
    <div className="w-full mb-2.5 p-2 rounded-lg flex items-center justify-between bg-neutral-100/80 transition-transform hover:-translate-y-0.5 hover:shadow-lg group cursor-pointer">
      <div className="flex items-center space-x-3">
        <div
          className={`flex items-center justify-center ${bgColor} rounded-full w-7 h-7 mr-1 group-hover:scale-110 transition-transform ml-2`}
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
};

export default StatusCountCardItems;
