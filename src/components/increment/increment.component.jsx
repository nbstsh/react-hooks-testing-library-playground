import React from 'react';
import useIncrement from './increment.hook';

const Increment = props => {
	const { value, increment } = useIncrement();

	return (
		<div>
			<div className='value'>{value}</div>
			<button className='increment-btn' onClick={increment}>
				+1
			</button>
		</div>
	);
};

export default Increment;
