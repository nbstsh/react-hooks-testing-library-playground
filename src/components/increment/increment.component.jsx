import React from 'react';
import useIncrement from './increment.hook';
import { IncrementProvider } from './increment.context';

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
