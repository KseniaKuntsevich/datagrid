import React from 'react';
import Search from './Search'

function HeaderSearches({ list, onClick }) {

  return (
    <div style={{width: '100%'}} className='row'>
      {list.map((item, i) => <div key={i} className='col'><Search title={item} onClick={onClick}/></div>)
      }
    </div>
  );
}

export default HeaderSearches;