import React from 'react';

function DatagridHeader({ title, onClick, isActive, isUp }) {

  return (
    <div onClick={() => {onClick(title)}} className={isActive ? 'bg-light' : ''}>
      {title} {isActive ? (isUp ? '/\\' : '\\/') : ''}
    </div>
  );
}

export default DatagridHeader;