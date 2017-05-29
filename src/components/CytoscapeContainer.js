import React from 'react';
import PropTypes from 'prop-types';
import Cy from 'cytoscape';

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
    this.fetchData = this.fetchData.bind(this);
  }
  
  unsetCyInstance() {
    if (this.state.cy != null) {
      this.state.cy.destroy();
    }
    return this;
  }
  setCyInstance(elements, style, options) {
    
    const setOptions = {
      // set container for rendering (get from ref in Cytoscape component)
      container: this.cyContainer,
      // set elements and style
      elements: elements,
      style: style,
      // other options
      ...options      
    };
    
    const cy = Cy(setOptions);
    
    this.setState({
      cy: cy
    }); 
    
    cy.ready(this.props.onCyReady.bind(cy));
    cy.on('destroy', this.props.onCyDestroy.bind(cy));
  }
  fetchData(elements, style, options) {
    Promise.all([elements, style]
      .map(item => item && typeof item === 'string'?
        doFetch(item).then(result) : 
        (item && (Array.isArray(item) || typeof item.then === 'function')?
          Promise.resolve(item)
          :
          Promise.resolve(undefined)
        )        
      )
    )
      .then((result) => {
        this
          .unsetCyInstance()
          .setCyInstance(result[0], result[1], options); 
      });
  }
  componentWillReceiveProps(nextProps) {
    const {elements, style, ...options} = nextProps.cyOptions;
    
    if (elements !== this.props.cyOptions.elements || style !== this.props.cyOptions.style) {
      this.fetchData(elements, style, options);
    }
  }
  componentDidMount() {
    const {elements, style, ...options} = this.props.cyOptions;
    
    this.fetchData(elements, style, options);
  }
  render() {
    const {className, style} = this.props;
    return (
      <CytoscapeRender
        {...className ? {className} : {}}
        {...style ? {style} : {}}
        cyContainerRef={el => this.cyContainer = el}
        {...this.otherProps}
      />
    );
  }
}

CytoscapeContainer.propTypes = {  
  className: PropTypes.string,
  style: PropTypes.object,
  onCyReady: PropTypes.func,
  onCyDestroy: PropTypes.func,
  cyOptions: PropTypes.object
};

CytoscapeContainer.displayName = 'CytoscapeContainer';

function result(res) {
  return res.json();
}

function doFetch(url, options = {mode: 'no-cors'}) {
  return fetch(url, options);
}

export default CytoscapeContainer;
