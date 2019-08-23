import { renderHook, act } from '@testing-library/react-hooks';
import useIncrement from './increment.hook';

describe('[CUSTOM HOOK] useIncrement', () => {
	it('should increment value', () => {
		const { result } = renderHook(() => useIncrement());
		act(() => result.current.increment());
		expect(result.current.value).toEqual(1);
	});

	it('should not increment value over 5', () => {
		const { result } = renderHook(() => useIncrement());
		const increment = () => act(() => result.current.increment());
		[...Array(6)].forEach(increment);
		expect(result.current.value).toEqual(5);
	});
});
