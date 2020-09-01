import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('should render', () => {
  const wrapper = renderer.create(<Home />);
  expect(wrapper).toMatchSnapshot();
});
