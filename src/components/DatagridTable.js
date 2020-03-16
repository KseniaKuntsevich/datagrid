import React from 'react';
import { FixedSizeList as List } from 'react-window';

function DatagridTable({ todo, activeColumns, onClick, colClasses }) {

const Row = ({ index, style }) => (
  <div 
    className={todo[index].isActive ? "row bg-secondary border-top" : "row border-top"}
    onClick={() => onClick(index)} 
    style={style}
    >
    {activeColumns.map((column, i) => {
      const isSticky = column === 'user' || column === 'id'
      let cl = isSticky ? 'sticky-horizontal position-absolute w-100' : ''
      let style = isSticky ? {backgroundColor: todo[index].isActive ? '#6c757d' : '#f8f9fa', zIndex: 10, height: '36px'} : {}
      
      return(
        <div key={i} className={colClasses[column]}>
          <div
           style={style}
           className={cl}>
            <div className="pl-4"> {todo[index][column]}</div>
           </div>
        </div>
      )}
     )}
  </div>
);

  const Table = () => (
	  <List
	    height={1000}
	    itemCount={todo.length}
	    itemSize={37}
	    width={activeColumns.length * 18 + '%'}
	  >
	    {Row}
	  </List>
	);

  return (
    <div>
      <div className="container-fluid"><Table /></div>
    </div>
  );
}

export default DatagridTable;


