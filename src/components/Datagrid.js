import React from 'react';

function Datagrid({ content }) {
  const onScroll = (e) => {
  	const list = document.querySelectorAll('.sticky-horizontal')
  	list.forEach(item => {
  		item.style.position = 'fixed'
  		item.style.left = e.target.scrollLeft+ 14 + 'px'
  	})
  }

  return (
    <div onScroll={onScroll} className="w-100 overflow-auto">
      {content.header}
      {content.body}
    </div>
  );
}

export default Datagrid;