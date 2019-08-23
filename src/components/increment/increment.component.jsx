import React, { useState } from 'react';

const Increment = props => {
	const [value, setValue] = useState(0);

	const onClick = () => {
		if (value >= 5) return;
		setValue(value + 1);
	};
	return (
		<div>
			<div className='value'>{value}</div>
			<button className='increment-btn' onClick={onClick}>
				+1
			</button>
		</div>
	);
};

export default Increment;
