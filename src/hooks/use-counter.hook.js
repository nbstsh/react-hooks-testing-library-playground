import React, { useState, useContext, useCallback, createContext } from 'react';

const CounterStepContext = createContext(1);

export const CounterStepProvider = ({ step, children }) => {
	return (
		<CounterStepContext.Provider value={step}>
			{children}
		</CounterStepContext.Provider>
	);
};

const useCounter = (initialValue = 0) => {
	const step = useContext(CounterStepContext);

	const [count, setCount] = useState(initialValue);
	const increment = useCallback(() => setCount(x => x + step), [step]);
	const incrementAsync = useCallback(() => setTimeout(increment, 100), [
		increment
	]);
	const reset = useCallback(() => setCount(initialValue), [initialValue]);

	if (count > 9000) {
		throw new Error(`It's over 9000!`);
	}

	return { count, increment, incrementAsync, useCallback, reset };
};

export default useCounter;
