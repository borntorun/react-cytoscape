import React from 'react';
import PropTypes from 'prop-types';
import Cy from 'cytoscape';
// import { WindowResizeListener } from 'react-window-resize-listener';

import CytoscapeRender from './CytoscapeRender'; 

class CytoscapeContainer extends React.Component {
  constructor(props) {
    super(props);
  
    
    // set initial state
    //  cy: cytoscape instance
    this.state = {
      cy: null
    };

    this.setCyInstance = this.setCyInstance.bind(this);
    this.unsetCyInstance = this.unsetCyInstance.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }  
  resizeHandler(windowSize) {
    console.log('resizeHandler=');
    if (this.state.cy != null) {
      this.state.cy.resize();
      if (typeof this.props.onResize === 'function') {
        this.props.onResize.call(null,{cy:this.state.cy, windowSize: windowSize} );
      }
    }  
  }
  unsetCyInstance() {
    if (this.state.cy != null) {
      this.state.cy.destroy();
    }
  }
  setCyInstance() {
    const {elements, style, layout, ...options} = Object.assign({}, this.props.cyOptions);

    const cy = Cy(Object.assign({}, 
      {container: this.cyContainer }, 
      elements ? {elements} : {}, style ? {style} : {}, layout ? {layout} : {}, 
      options? {...options} : {}
    ));
    
    this.setState({
      cy: cy
    }); 
    
    if (typeof this.props.onCyReady === 'function') { 
      cy.ready(this.props.onCyReady);
    }
    if (typeof this.props.onCyDestroy === 'function') {
      cy.on('destroy', this.props.onCyDestroy);
    }    
  }
  componentWillReceiveProps(/*nextProps*/) {
    // TODO?

    // just a test
    this.unsetCyInstance();
    this.setCyInstance();
  }
  shouldComponentUpdate() {
    // TODO?
    return true;
  }
  componentDidMount() {
    
    this.unsetCyInstance();
    this.setCyInstance();
  }
  render() {
    const {className, style, resizeDebounceTime} = this.props;
    
    return (
      <CytoscapeRender
        {...className ? {className} : {}}
        {...style ? {style} : {}}
        cyContainerRef={el => this.cyContainer = el}
        onResize={this.resizeHandler}
        resizeDebounceTime={resizeDebounceTime}      
      />
    );
  }
}

CytoscapeContainer.propTypes = {  
  className: PropTypes.string,
  style: PropTypes.object,
  onCyReady: PropTypes.func,
  onCyDestroy: PropTypes.func,
  onResize: PropTypes.func,
  resizeDebounceTime: PropTypes.number,
  cyOptions: PropTypes.object
};

CytoscapeContainer.displayName = 'CytoscapeContainer';

export default CytoscapeContainer;
