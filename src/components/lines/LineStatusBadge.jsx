import '../../global.css';

const LineStatusBadge = ({ status, statusColor }) => {
  return (
    <div className="flex items-center">
      <div className="h-7 px-3 py-1 ml-2 mr-5 bg-red-500 rounded-full text-sm font-medium">
        status
      </div>
    </div>
  );
};

export default LineStatusBadge;
