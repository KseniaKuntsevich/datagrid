import React from 'react';

function MainSearch({ onClick }) {
  return (
    <div className="input-group mb-3">
 	  	<input 
	  	className="form-control"
	  	defaultValue={localStorage.getItem('mainSearch')}
	  	onBlur={(e) => {
	  		const val = e.target.value.toLowerCase()
	  		localStorage.setItem('mainSearch', val)
	  		onClick('main', val)
	  	}}
	  	placeholder='Search all' />
	    <button className="btn btn-light border"><img src="https://image.flaticon.com/icons/svg/482/482631.svg" style={{width: 15}} alt="search"/></button>
    </div>
  );
}

export default MainSearch;