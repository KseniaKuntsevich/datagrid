import React from 'react';
import { FixedSizeList as List } from 'react-window';

function DatagridTable({ todo, activeColumns, onClick }) {

const Row = ({ index, style }) => (

  <div 
    className={todo[index].isActive ? "row bg-secondary border-top p-3" : "row border-top p-3"}
    onClick={() => onClick(index)} 
    style={style}
    >
    {activeColumns.map((column, i) => (
      <div key={i} className="col">{todo[index][column]}</div>
    ))}
  </div>
);


  const ExampleRow = () => (
	  <List
	    height={1000}
	    itemCount={todo.length}
	    itemSize={75}
	    width={'130%'}
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


