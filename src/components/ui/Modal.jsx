function Modal({ title, children, showModal, handleCloseModal }) {
  if (showModal == true) {
    return (
      <div className="fixed flex items-center justify-center">
        <div className="bg-stone-transparent backdrop-blur-sm border-8 border-neutral-100 rounded-xl p-4 md:p-6 cursor-default">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl md:text-2xl font-extrabold text-white mb-4">
              {title}
            </div>
            <div className="text-base md:text-lg text-white font-bold text-center">
              {children}
            </div>
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
