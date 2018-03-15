import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from './Cart';
import CartItem from './CartItem';

configure({ adapter: new Adapter() });

const ITEMS = require('./data/items.json');

describe('<Cart />', () => {
	it('should render ' + ITEMS.length + ' <CartItem /> elements', () => {
		const wrapper = shallow(<Cart />);
		expect(wrapper.find(CartItem)).toHaveLength(ITEMS.length);
	});
});