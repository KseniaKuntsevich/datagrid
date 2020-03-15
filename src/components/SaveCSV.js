import React from 'react';

function SaveCSV({ todo, activeColumns }) {
  const getTodoCVD = () => {
  	return "data:text/csv;charset=utf-8," 
	    + todo.map(item => {
	    	let str = activeColumns.join(", ") + "\n"
	    	activeColumns.forEach((a, b) => str += item[a] + ' ')
	    	str += "\n"
	    	return str
	    	}).join("\n");

  }
  const save = () => {
  	const rows = [
	    ["name1", "city1", "some other info"],
	    ["name2", "city2", "more info"]
	];

	let csvContent = getTodoCVD()



	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "my_data.csv");
	document.body.appendChild(link); // Required for FF

	link.click();

  }

  return (
    <div style={{cursor: 'pointer'}} onClick={save} className='p-3 pb-4 text-right text-primary'>
      Download
      <img style={{width: 20}} className='ml-2' src="https://image.flaticon.com/icons/svg/1263/1263920.svg"/>
    </div>
  );
}

export default SaveCSV;