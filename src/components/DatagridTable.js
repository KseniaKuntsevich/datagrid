import React from 'react';
import { FixedSizeList as List } from 'react-window';

function DatagridTable({ todo }) {

const Row = ({ index, style }) => (
  <div style={style} className="border-top overflow-hidden p-2">
    <div className="row">
      <div className="col">{todo[index].id}</div>
      <div className="col">{todo[index].title}</div>
      <div className="col">{todo[index].completed ? 'true' : 'false'}</div>
      <div className="col">5</div>
    </div>
  </div>
);

  const ExampleRow = () => (
	  <List
	    height={1000}
	    itemCount={todo.length}
	    itemSize={75}
	    width={'100%'}
	  >
	    {Row}
	  </List>
	);

  return (
    <div>
      <ExampleRow />
    </div>
  );
}

export default DatagridTable;