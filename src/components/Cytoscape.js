import React from 'react';
import PropTypes from 'prop-types';

const Cytoscape = (props) => {
  return (
    <div ref={props.cyContainerRef} >
      {props.teste}
    </div>
  );  
};

Cytoscape.propTypes = {
  cyContainerRef: PropTypes.func.isRequired,
  teste: PropTypes.number
};

Cytoscape.displayName = 'Cytoscape';

export default Cytoscape;
