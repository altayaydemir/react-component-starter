// Core
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Component
import Test from '../';

describe('Test of Test component...', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Test />);
    expect(wrapper).to.have.length(1);
  });
});
