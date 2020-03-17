import React from 'react';

function HeaderSearches({ list, onClick, colClasses }) {
  const categories =['home', 'work', 'vocation', 'to buy']

  const onStrSearch = (e, title) => {
  	const val = e.target.value.toLowerCase()
  	localStorage.setItem(title, val)
  	onClick(title, val)
  }

  const search = (title, onClick) => (
  	<div className="input-group mb-3">
 	  	<input 
	  	className="form-control"
	  	defaultValue={localStorage.getItem(title)}
	  	onBlur={(e) => onStrSearch(e, title)} 
	  	placeholder='search' />
	    <button className="btn btn-light border"><img src="https://image.flaticon.com/icons/svg/482/482631.svg" style={{width: 15}} alt="search"/></button>
    </div>
  	)
  
  const categorySelect = (title, onClick) => {
  	const activeOption = localStorage.getItem(title)
    return (
	  <select defaultValue={activeOption} onChange={(e) => onStrSearch(e, title)} className="custom-select">
	    <option value=''>Choose...</option>
	    {categories.map((category, i) => (<option key={i} value={category}>{category}</option>))}
	  </select>
  )}

  let completedValues = [{value: '', name: 'all'}, {value: 'yes', name: 'yes'}, {value: 'no', name: 'no'}]
  const boolean = (title, onClick) => (
  	<div className="form" onChange={(e) => onStrSearch(e, title)}>
	  	{completedValues.map((item, i) => (
		  	<div key={i} className="form-check form-check">
				 <input
				  className="form-check-input"
				  type="radio" name="inlineRadioOptions"
				  id={"inlineRadio" + i}
				  value={item.value}
				  defaultChecked={localStorage.getItem(title) === item.value ? 'checked' : false}
				  />
				 <label className="form-check-label" htmlFor={"inlineRadio"+ i}>{item.name}</label>
			</div>
		))}
	</div>
  )

  const importanceSearch = (title, onClick) => (
    <div>
	<input 
	    onChange={(e) => {onClick(title, '')}}
	    className="form-check-input"
	    type="checkbox" name="inlineRadioOptions"
	    id="rangeAll"
	    value=''
	    defaultChecked={!localStorage.getItem(title)}
	    />

	<label className="form-check-label" htmlFor="inlineRadio">all</label>
    <input onChange={(e) => { 
	    	document.getElementById('rangeAll').checked = false
	    	const val = e.target.value
	    	localStorage.setItem(title, val)
	  		onClick(title, val )
	    }}
		type="range"
		className="custom-range"
		min="1"
		max="10"
		defaultValue={localStorage.getItem(title)}
		id="customRange2" />
    </div>
  )

    const idSearch = (title, onClick) => {
	    const val1 = localStorage.getItem('doubleRange1') || 1
	    const val2 = localStorage.getItem('doubleRange2') || 1000
	    return (
		    <div id="doubleRange" onChange={(e) => { 
			    	const inps = document.getElementById('doubleRange').querySelectorAll('.doubleRange')
			    	const inpsLabels = document.getElementById('doubleRange').querySelectorAll('.doubleRange-label')
			    	const val1 = +inps[0].value
			    	const val2 = +inps[1].value
			    	inpsLabels[0].textContent = val1
			    	inpsLabels[1].textContent = val2
			    	localStorage.setItem('doubleRange1', val1)
			    	localStorage.setItem('doubleRange2', val2)
			  		onClick(title, [val1, val2])
			     }}>
		        <label>from <span className="doubleRange-label">{val1}</span></label>
			    <input defaultValue={val1} type="range" className="custom-range doubleRange" min="0" max="1000" default="1" step="10" id="customRange2" />
			    <label>to <span className="doubleRange-label">{val2}</span></label>
			    <input defaultValue={val2} type="range" className="custom-range doubleRange" min="0" max="1000" default="1000" step="10" id="customRange2" />
		    </div>
	    )
	}

  const colSearches = {
  id: idSearch,
  user: search,
  title: search,
  completed: boolean,
  importance: importanceSearch,
  category: categorySelect,
  date: search,
  }

  let width = list.length * 18
  width = width < 100 ? 100 : width
  width += '%'

  return (
    <div style={{width}} className='row bg-light pb-4 pl-3'>
      {list.map((item, i) => <div key={i} className={colClasses[item]}>{colSearches[item](item, onClick)}</div>)
      }
    </div>
  );
}

export default HeaderSearches;