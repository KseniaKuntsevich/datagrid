import React from 'react';

function  HeaderTitles ({ list, onClick, activeTitle, activeTitles, activeTitleIsUp, colClasses }){
  let width = list.length * 18
  width = width < 100 ? 100 : width
  width += '%'
  return (
    <div style={{width, cursor: 'pointer'}} className='row bg-light pl-3'>
      {
      	list.map((title, i) => {
      		const isActive = title === activeTitle || activeTitles.indexOf(title) > -1
      		const isUp = activeTitles.length ? false : activeTitleIsUp
          const cl = isActive ? colClasses[title] + ' text-primary' : colClasses[title]
      		return(
      			<div key={i} onClick={() => {onClick(title)}} className={cl}>
			      <div className='p-2'>{title} {isActive ? (isUp ? '/\\' : '\\/') : ''}</div>
			    </div>
      		)
      	})
      }
    </div>
  );
 
}

export default HeaderTitles;
