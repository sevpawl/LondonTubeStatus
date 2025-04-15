import { useState, useEffect } from 'react';
import '../../global.css';

function Modal({ title, showModal, hideModal, handleOpenModal, handleCloseModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative z-50 w-full max-w-md">
        <div className="bg-red-500/70 backdrop-blur-sm overflow-hidden border-8 border-white-500 rounded-xl p-6 cursor-default">
          <div className="px-6 py-6 flex items-center justify-center">
            <div className="text-2xl font-extrabold text-white mb-4">{title}</div>
            <div className="text-lg text-white font-bold">
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
