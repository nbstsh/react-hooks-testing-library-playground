import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter, { CounterStepProvider } from './use-counter.hook';

describe('useCounter', () => {
	it('should use custom step when incrementing', () => {
		const step = 2;
		const initialValue = 100;

		const wrapper = ({ children }) => (
			<CounterStepProvider step={step}>{children}</CounterStepProvider>
		);
		const { result } = renderHook(() => useCounter(initialValue), { wrapper });

		expect(result.current.count).toBe(initialValue);

		act(() => result.current.increment());

		expect(result.current.count).toBe(initialValue + step);
	});

	it('should increment counter after delay', async () => {
		const step = 2;
		const initialValue = 100;

		const wrapper = ({ children }) => (
			<CounterStepProvider step={step}>{children}</CounterStepProvider>
		);
		const { result, waitForNextUpdate } = renderHook(
			() => useCounter(initialValue),
			{ wrapper }
		);

		expect(result.current.count).toBe(initialValue);

		result.current.incrementAsync();
		await waitForNextUpdate();

		expect(result.current.count).toBe(initialValue + step);
	});
});
