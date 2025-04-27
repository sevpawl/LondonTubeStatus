import { Modal } from '../RootContainer';
import '../../global.css';

const LineStatusBadge = ({ status, statusColor, onClick }) => {
  return (
    <div className="flex items-center">
      <div
        className="px-2 md:px-3 py-0.5 ml-2 mr-2 md:mr-5 bg-red-500 rounded-full text-xs md:text-sm font-medium cursor-default"
        style={{
          boxShadow: 'inset 2px 2px 4px #f8f8f, inset -2px -2px 4px #ffffff',
        }}
      >
        status
      </div>
    </div>
  );
};

export default LineStatusBadge;
