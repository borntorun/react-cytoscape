import React from 'react';
import PropTypes from 'prop-types';

const CytoscapeRender = (props) => {
  const {cyContainerRef, ...otherProps} = props;
  return (
    <div 
      ref={cyContainerRef}
      {...otherProps}      
    />
  );  
};

CytoscapeRender.propTypes = {
  cyContainerRef: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

CytoscapeRender.displayName = 'CytoscapeRender';

export default CytoscapeRender;
