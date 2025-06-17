function Modal({ title, children, showModal, onClose }) {
  if (showModal == true) {
    return (
      <div
        className="inset-0 fixed bg-black/5 backdrop-blur-sm z-[1000] flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget && typeof onClose === 'function') {
            onClose();
          }
        }}
      >
        <div className="bg-stone-transparent backdrop-blur-sm border-8 border-neutral-100 rounded-xl p-4 md:p-10 cursor-default">
          <div className="">
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

// make bg reflect color of status type
