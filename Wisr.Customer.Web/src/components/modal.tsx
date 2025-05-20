import React from "react";
import "./modal.css";

export const Modal: React.FC<{
  children: React.ReactNode;
  onClose?: () => void;
}> = ({ children, onClose }) => {
  return (
    <div className="modal" onClick={() => onClose?.()}>
      <dialog onClick={(e) => e.stopPropagation()}>{children}</dialog>
    </div>
  );
};
