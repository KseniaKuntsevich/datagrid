import React from 'react';

function DatagridHeader({ rows }) {
  return (
  	<div className='container-fluid p-0 m-0' >
	  	{rows.map((row, j) => (
	  		<div key={j}>
	  		  { row }
	  		</div>
	  	))}
  	</div>
  );
}

export default DatagridHeader;