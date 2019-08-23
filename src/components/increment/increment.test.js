import React from 'react';
import { shallow } from 'enzyme';
import Increment from './increment.component';

describe('[COMPOENNT] Increment', () => {
	it('should render with initial value 0', () => {
		const wrapper = shallow(<Increment />);
		expect(wrapper.find('.value').text()).toEqual('0');
	});

	it('increments value when clicking +1', () => {
		const wrapper = shallow(<Increment />);
		wrapper.find('.increment-btn').simulate('click');
		expect(wrapper.find('.value').text()).toEqual('1');
	});

	it('should not increment value over 5', () => {
		const wrapper = shallow(<Increment />);
		const increment = () => wrapper.find('.increment-btn').simulate('click');
		[...Array(6)].forEach(() => increment());
		expect(wrapper.find('.value').text()).toEqual('5');
	});
});
