import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
    
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

	return ReactDOM.createPortal(
		<div
			className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-99"
			onClick={() => onClose()} // Close when clicking the background
		>
			<div
				className="min-w-1/6 rounded-xl bg-gray-800 text-black dark:text-white font-semibold p-4"
				onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
			>
				<div className="flex justify-end">
                    <span onClick={() => onClose()} className="material-icons text-gray-300 hover:cursor-pointer active:scale-90 select-none transition">close</span>
                </div>
                <hr className="text-gray-300 my-2" />
                {children}
			</div>
		</div>,
		document.getElementById("modal-window")
	);
};

export default Modal;
