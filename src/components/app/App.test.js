import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
