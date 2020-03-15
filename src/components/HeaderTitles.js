import React, { Component } from 'react';

function  HeaderTitles ({ list, onClick, activeTitle, activeTitles, activeTitleIsUp }){

  return (
    <div style={{width: '100%', cursor: 'pointer'}} className='row bg-light'>
      {
      	list.map((title, i) => {
      		const isActive = title === activeTitle || activeTitles.indexOf(title) > -1
      		const isUp = activeTitles.length ? false : activeTitleIsUp
      		return(
      			<div key={i} onClick={() => {onClick(title)}} className={isActive ? 'text-primary col' : 'col'}>
			      <div className='p-2'>{title} {isActive ? (isUp ? '/\\' : '\\/') : ''}</div>
			    </div>
      		)
      	})
      }
    </div>
  );
 
}

export default HeaderTitles;
