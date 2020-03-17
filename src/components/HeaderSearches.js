import React from 'react';

function HeaderSearches({ list, onClick, colClasses }) {
  const categories =['home', 'work', 'vocation', 'to buy']
  const search = (title, onClick) => (<input className="form-control" onBlur={(e) => {onClick(title, e.target.value)}} placeholder='search' />)
  
  const categorySelect = (title, onClick) => (
	  <select onChange={(e) => {
	  	onClick(title, e.target.value)
	  }} className="custom-select">
	    <option value="">Choose...</option>
	    {categories.map((category, i) => (<option key={i} value={category}>{category}</option>))}
	  </select>
  )

  let completedValues = [{value: '', name: 'all'}, {value: 'yes', name: 'yes'}, {value: 'no', name: 'no'}]
  const boolean = (title, onClick) => (
  	<div className="form" onChange={(e) => {onClick(title, e.target.value)}}>
	  	{completedValues.map((item, i) => (
		  	<div key={i} className="form-check form-check">
			  <input className="form-check-input" type="radio" name="inlineRadioOptions" id={"inlineRadio" + i} value={item.value}/>
			  <label className="form-check-label" htmlFor={"inlineRadio"+ i}>{item.name}</label>
			</div>
		))}
	</div>
  )



  const importanceSearch = (title, onClick) => (
    <div>

	<input onChange={(e) => {onClick(title, '')}} className="form-check-input" type="checkbox" name="inlineRadioOptions" id="rangeAll" value=''/>
	<label className="form-check-label" htmlFor="inlineRadio">all</label>
    <input onChange={(e) => { 
    	document.getElementById('rangeAll').checked = false
    	onClick(title, +e.target.value)
     }} type="range" className="custom-range" min="1" max="10" id="customRange2" />
    </div>
  )

  const colSearches = {
  id: search,
  user: search,
  title: search,
  completed: boolean,
  importance: importanceSearch,
  category: categorySelect,
  date: search,
  }

  return (
    <div style={{width: list.length * 18 + '%'}} className='row bg-light pb-4'>
      {list.map((item, i) => <div key={i} className={colClasses[item]}>{colSearches[item](item, onClick)}</div>)
      }
    </div>
  );
}

export default HeaderSearches;