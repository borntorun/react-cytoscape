import React from 'react';
import PropTypes from 'prop-types';
import { WindowResizeListener } from 'react-window-resize-listener';

const CytoscapeRender = (props) => {
  const {cyContainerRef, onResize, resizeDebounceTime, ...otherProps} = props;
  
  WindowResizeListener.DEBOUNCE_TIME = resizeDebounceTime || 150;
  
  return (
    <div 
      ref={cyContainerRef}
      {...otherProps}      
    >
      {/*WindowResizeListener does not render anything just set the listener*/}
      <WindowResizeListener onResize={onResize}/>      
    </div>
  );  
};

CytoscapeRender.propTypes = {
  cyContainerRef: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onResize: PropTypes.func,
  resizeDebounceTime: PropTypes.number,
};

CytoscapeRender.displayName = 'CytoscapeRender';

export default CytoscapeRender;
