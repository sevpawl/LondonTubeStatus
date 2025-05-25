import '../../global.css';

function Modal({ title, children, showModal, handleCloseModal }) {
  if (showModal == true) {
    return (
      <div>
        <div className="bg-red-500/70 backdrop-blur-sm overflow-hidden border-8 border-white-500 rounded-xl p-4 md:p-6 cursor-default">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl md:text-2xl font-extrabold text-white mb-4">
              {title}
            </div>
            <div className="text-base md:text-lg text-white font-bold text-center">
              {children}
            </div>
            <button
              className="bg-white py-[0.5px] px-2 mt-4 mb-[-8px] rounded-full text-black cursor-pointer text-xs font-bold"
              onClick={handleCloseModal}
            >
              button
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;

// handleOutsideClick

// make bg reflect color of status type
