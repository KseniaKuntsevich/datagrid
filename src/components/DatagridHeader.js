import React from 'react';

function DatagridHeader({ titles }) {

  return (
    <div className='row'>
      {titles.map((title, i) => (<div className="col" key={i}>{title}</div>))}
    </div>
  );
}

export default DatagridHeader;