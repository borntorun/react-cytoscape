import React from 'react';
import { shallow, mount/*, render*/ } from 'enzyme';
import App from '../App';

it('mounts without crashing', () => {
  mount(<App />);
});
it('renders without crashing', () => {
  shallow(<App />);
});

