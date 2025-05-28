function Modal({ title, children, showModal }) {
  if (showModal == true) {
    return (
      <div className="absolute top-full justify-center mt-2 w-64 rounded-lg shadow-lg z-50">
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

// handleOutsideClick

// make bg reflect color of status type
