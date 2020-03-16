import React from 'react';

function DatagridHeader({ rows }) {
  return (
  	<div className='container-fluid' >
	  	{rows.map((row, j) => (
	  		<div className="" key={j}>
	  		  { row }
	  		</div>
	  	))}
  	</div>
  );
}

export default DatagridHeader;