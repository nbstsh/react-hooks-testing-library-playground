import React, { useState, createContext } from 'react';

export const IncrementContext = createContext(null);

export const IncrementProvider = ({ children }) => {
	const [value, setValue] = useState(0);

	return (
		<IncrementContext.Provider value={[value, setValue]}>
			{children}
		</IncrementContext.Provider>
	);
};
