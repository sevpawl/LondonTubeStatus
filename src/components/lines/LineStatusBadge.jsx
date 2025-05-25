import { Modal } from '../RootContainer';
import '../../global.css';
import { useState } from 'react';

const LineStatusBadge = ({ onClick, statusType }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log('modal opened');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log('modal closed');
  };

  return (
    <div className="flex items-center">
      <button
        className={`px-2 md:px-3 py-0.5 ml-2 mr-2 md:mr-5 bg-black/10 rounded-full text-xs md:text-sm font-medium cursor-pointer`}
        style={{
          boxShadow: 'inset 2px 2px 4px #f8f8f, inset -2px -2px 4px #ffffff',
        }}
        onClick={handleOpenModal}
      >
        status
      </button>
      <Modal showModal={showModal}></Modal>
    </div>
  );
};

export default LineStatusBadge;
