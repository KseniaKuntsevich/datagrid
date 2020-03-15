import React from 'react';

function Datagrid({ content }) {

  return (
    <div className="">
      {content.header}
      {content.body}
    </div>
  );
}

export default Datagrid;