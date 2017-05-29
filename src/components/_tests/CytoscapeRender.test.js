import React from 'react';
import { /*shallow,*/ mount/*, render*/ } from 'enzyme';
import CytoscapeRender from '../CytoscapeRender';

const myThis = {};

it('mounts without crashing', () => {
  let f = function(el) {
    return this.cyContainer = el;
  };
  f=f.bind(myThis);
  mount(<CytoscapeRender cyContainerRef={f} />);
  expect(myThis.cyContainer).toBeDefined();  
});
