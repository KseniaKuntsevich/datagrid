import React from 'react';

function HeaderToggle({ titles, onClick, columnsStatus }) {

  return (
    <ul className='pb-2 text-primary list-group list-group-horizontal pb-4'>
      {titles.map((title, i) => <li key={i} className={columnsStatus[title] ? 'list-group-item' : 'list-group-item text-secondary'} onClick={() => onClick(title)}>{title}</li>)
      }
    </ul>
  );
}

export default HeaderToggle;