import { useState, useEffect } from 'react';
import '../../global.css';

function Modal({ title, showModal, hideModal, handleOpenModal, handleCloseModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className="relative z-50 w-full max-w-md">
        <div className="bg-red-500/70 backdrop-blur-sm overflow-hidden border-8 border-white-500 rounded-xl p-4 md:p-6 cursor-default">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl md:text-2xl font-extrabold text-white mb-4">{title}</div>
            <div className="text-base md:text-lg text-white font-bold text-center">
              status description goes here status description goes here status description goes here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// useState/Effect are for handling open / close later ↓

// handleOutsideClick

// modal control:

// const [showModal] = useState(false);
// const [handleOpenModal] () => {
//     console.log('opening modal');
//      setShowModal(true);
// };
// const handleCloseModal = () => {
//   setShowModal(false);
// };

// make bg reflect color of status type
