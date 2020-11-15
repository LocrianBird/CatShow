import React from 'react';

const SearchBox = ({ searchfield, searchchange }) => {
	return(
		<div className="pa2">
			<input 
				className="ba bw1 b--gold f4 lh-copy bg-mid-gray pa3 "
				type="search" 
				placeholder="Search cats!" 
				onChange={searchchange}
			/>
		</div>
	);
}

export default SearchBox;