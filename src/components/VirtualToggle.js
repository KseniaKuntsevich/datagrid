import React from 'react';

function VirtualToggle({ onClick, isActive }) {
  let cl = "p-3 text-right "
  cl += isActive ? "text-danger" : "text-success"
  return (
    <div className={cl}>
 	  <span className="font-weight-bolder" onClick={onClick}>Turn virtual {isActive ? 'Off' : "On"}</span>
    </div>
  );
}

export default VirtualToggle;