import { Modal } from '../RootContainer';
import '../../global.css';
import { useState } from 'react';
import { statusMap } from '../../utils/constants';

const LineStatusBadge = ({ severity, reason, isLoading, children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLineStatusBadgeClick = () => {
    setShowModal(!showModal);
  };

  // outside click close is handled by Modal's backdrop onClick

  // determine badge color / icon using numeric severity code
  const statusInfo = statusMap[severity] || {
    name: '?',
    bgColor: 'bg-gray-200',
    icon: null,
    iconColor: 'text-gray-600',
  };

  const bgColorStatusTile = ( severity == 10 ) ? 'bg-gray-200' : statusInfo.bgColor; 

  return (
    <div className="flex items-center">
      <button
        className={`text-gray-600 text-small shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500 backdrop-blur-sm rounded-lg px-2 py-0.5 ml-2 mr-2 text-sm font-medium cursor-pointer ${bgColorStatusTile}`}
        style={{
          boxShadow: 'inset 2px 2px 4px #f8f8f, inset -2px -2px 4px #ffffff',
        }}
        onClick={handleLineStatusBadgeClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="animate-pulse text-gray-400">...</span>
        ) : (
          <span className="flex items-center gap-1">
            {statusInfo.icon && (
              <statusInfo.icon size={14} className={statusInfo.iconColor} />
            )}
            {statusInfo.name || 'unknown'}
          </span>
        )}
      </button>
      <Modal
        showModal={showModal}
        title={null}
        onClose={() => setShowModal(false)}
      >
        <div
          className={`flex flex-col items-center gap-4 p-4 rounded-xl ${statusInfo.bgColor} bg-opacity-80`}
        >
          <div className="flex flex-col items-center gap-2">
            {statusInfo.icon && (
              <statusInfo.icon
                size={32}
                className={statusInfo.iconColor + ' mb-1'}
              />
            )}
            <div className="text-xl font-bold text-gray-800">
              {statusInfo.name || 'unknown'}
            </div>
            {reason && (
              <div className="text-sm text-gray-700 text-center max-w-xs">
                <b>reason:</b> {reason}
              </div>
            )}
          </div>
          <div className="w-full border-t border-gray-300 my-2"></div>
          <div className="mt-2">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default LineStatusBadge;
