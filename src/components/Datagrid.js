import React from 'react';

function Datagrid({ content }) {

  return (
    <div className="container">
      {content.header}
      {content.body}
    </div>
  );
}

export default Datagrid;