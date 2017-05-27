import React from 'react';
import PropTypes from 'prop-types';

const Cytoscape = (props) => {
  const {cyContainerRef, ...otherProps} = props;
  return (
    <div 
      ref={cyContainerRef}
      {...otherProps}      
    />
  );  
};

Cytoscape.propTypes = {
  cyContainerRef: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Cytoscape.displayName = 'Cytoscape';

export default Cytoscape;
