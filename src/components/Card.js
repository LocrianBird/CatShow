import React from 'react';

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className="tc bg-yellow dib br4 pa3 ma3 grow bw2 shadow-3">
			<img 
				src={`https://robohash.org/${id}?set=set4`}
				alt="somephoto"
				width="200"
				height="200"
			/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;