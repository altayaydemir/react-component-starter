import { shallow } from 'enzyme';
import React from 'react';
import TestComponent from '../';

describe('TestComponent Test', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.length).toEqual(1);
  });
});
