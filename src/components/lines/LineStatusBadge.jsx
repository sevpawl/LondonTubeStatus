import { Modal } from '../RootContainer';
import '../../global.css';
import { useState, useEffect } from 'react';
import { fetchTubeStatus, getStatusByLine } from '../../services/api';
import { statusColors } from '../../utils/Colors';

const LineStatusBadge = ({ statusColor, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [badgeDisplay, setBadgeDisplay] = useState('?');

  const handleOpenModal = () => {
    setShowModal(true);
    console.log('modal opened');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log('modal closed');
  };

  const handleLineStatusBadgeClick = () => {
    if (!showModal) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // const setLineStatus = async () => {
    //   try {
    //     const data = await fetchTubeStatus();
    //     const badgeDisplay = getStatusByLine(data);
    //     setBadgeDisplay(badgeDisplay);
    //   } catch (error) {
    //     setBadgeDisplay('unknown');
    //     console.log('error fetching line status: ', error);
    //   }
    // };
    // setLineStatus();
  }, []);

  return (
    <div className="flex items-center">
      <button
        className={` text-gray-600 text-small shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500 backdrop-blur-sm rounded-lg px-2 py-0.5 ml-2 mr-2 bg-neutral-200 text-sm font-medium cursor-pointer`}
        style={{
          boxShadow: 'inset 2px 2px 4px #f8f8f, inset -2px -2px 4px #ffffff',
        }}
        onClick={handleLineStatusBadgeClick}
      >
        {badgeDisplay}
      </button>
      <Modal showModal={showModal}>
        {children}
        <button
          onClick={handleCloseModal}
          className="text-gray-600 text-small shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] transition-all duration-500 backdrop-blur-sm rounded-lg px-2 py-0.5 ml-2 mr-2 bg-neutral-200 text-sm font-medium cursor-pointer"
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default LineStatusBadge;
