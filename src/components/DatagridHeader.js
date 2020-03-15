import React from 'react';

function DatagridHeader({ rows }) {
  return (
  	<div style={{width: '130%'}} className='shadow bg-light container-fluid' >
	  	{rows.map((row, j) => (
	  		<div className="" style={{width: '100%'}} key={j}>
	  		  { row }
	  		</div>
	  	))}
  	</div>
  );
}

export default DatagridHeader;