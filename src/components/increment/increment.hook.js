import { useState } from 'react';

const useIncrement = () => {
	const [value, setValue] = useState(0);

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
