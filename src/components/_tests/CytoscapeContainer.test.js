import React from 'react';
import { shallow, /*mount*//*, render*/ } from 'enzyme';
import Cytoscape from '../CytoscapeContainer';


it('renders without crashing', () => {
  shallow(<Cytoscape />);
});
