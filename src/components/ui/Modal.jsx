function Modal({ title, children, showModal, handleCloseModal }) {
  if (showModal == true) {
    return (
      <div className="fixed flex items-center justify-center">
        <div className="bg-stone-transparent backdrop-blur-sm overflow-hidden border-8 border-neutral-100 rounded-xl p-4 md:p-6 cursor-default">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl md:text-2xl font-extrabold text-white mb-4">
              {title}
            </div>
            <div className="text-base md:text-lg text-white font-bold text-center">
              {children}
            </div>
            <button
              onClick={handleCloseModal}
              className="md:mt-4 px-4 py-1.5 bg-neutral-100/70 text-gray-600 font-extrabold text-small cursor-pointer border-w4 border-neutral-100 hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_1px_1px_2px_#b8b8b8,inset_-1px_-1px_2px_#ffffff] transition-all duration-500 bg-stone-transparent backdrop-blur-sm rounded-lg"
            >
              close
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
