import React from 'react';

function DatagridTitleSearch({ title, onClick }) {

  return (
    <input className="form-control" onBlur={(e) => {onClick(title, e.target.value)}} placeholder='search' />
  );
}

export default DatagridTitleSearch;