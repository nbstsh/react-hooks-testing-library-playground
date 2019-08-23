import React from 'react';
import { shallow } from 'enzyme';
import Increment from './increment.component';
import useIncrement from './increment.hook';

jest.mock('./increment.hook.js');

describe('[COMPOENNT] Increment', () => {
	it('should render with value from custom hook', () => {
		useIncrement.mockImplementation(() => {
			return {
				value: '50',
				increment: () => {}
			};
		});

		const wrapper = shallow(<Increment />);
		expect(wrapper.find('.value').text()).toEqual('50');
	});

	it('shold call counter increment when clicking +1', () => {
		const incrementMock = jest.fn();
		useIncrement.mockImplementation(() => {
			return {
				value: '50',
				increment: incrementMock
			};
		});
		const wrapper = shallow(<Increment />);
		wrapper.find('.increment-btn').simulate('click');
		expect(incrementMock).toBeCalled();
	});
});
