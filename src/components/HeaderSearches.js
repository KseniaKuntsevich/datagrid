import React from 'react';

function HeaderSearches({ list, onClick, colClasses }) {
  const categories =['home', 'work', 'vocation', 'to buy']
  const search = (title, onClick) => (<input className="form-control" onBlur={(e) => {onClick(title, e.target.value)}} placeholder='search' />)
  
  const categorySelect = (title, onClick) => (
	  <select onChange={(e) => {
	  	onClick(title, e.target.value)
	  }} className="custom-select" id="inputGroupSelect01">
	    <option value="">Choose...</option>
	    {categories.map((category, i) => (<option key={i} value={category}>{category}</option>))}
	  </select>
  )

  const colSearches = {
  id: search,
  user: search,
  title: search,
  completed: search,
  importance: search,
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