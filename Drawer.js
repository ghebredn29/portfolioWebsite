import React, { useState } from 'react';

function Drawer() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      {/* Drawer content */}
      <div className="drawer-content">
        {/* Your drawer content here */}
      </div>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default Drawer;
