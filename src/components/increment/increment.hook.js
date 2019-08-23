import { useContext } from 'react';
import { IncrementContext } from './increment.context';

const useIncrement = () => {
	const context = useContext(IncrementContext);
	if (!context)
		throw new Error('useIncrement must be used within a IncrementProvider');

	const [value, setValue] = context;

	const increment = () => {
		if (value >= 5) return;
		setValue(value + 1);
	};

	return {
		value,
		increment
	};
};

export default useIncrement;
