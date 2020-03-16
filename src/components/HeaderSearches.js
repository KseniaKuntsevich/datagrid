import React from 'react';
import Search from './Search'

function HeaderSearches({ list, onClick, colClasses }) {

  return (
    <div style={{width: list.length * 18 + '%'}} className='row bg-light pb-4'>
      {list.map((item, i) => <div key={i} className={colClasses[item]}><Search title={item} onClick={onClick}/></div>)
      }
    </div>
  );
}

export default HeaderSearches;