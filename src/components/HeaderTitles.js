import React, { Component } from 'react';

function  HeaderTitles ({ list, onClick, activeTitle, activeTitles, activeTitleIsUp, colClasses }){

  return (
    <div style={{width: list.length * 18 + '%', cursor: 'pointer'}} className='row bg-light'>
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
