import { shallow } from 'enzyme';
import React from 'react';
import Component from '../Component';

describe('Component Test', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.length).toEqual(1);
  });
});
