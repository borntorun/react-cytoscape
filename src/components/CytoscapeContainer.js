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
  }
  
  unsetCyInstance() {
    console.log('CytoscapeContainer unsetCyInstance');
    if (this.state.cy != null) {
      console.log('CytoscapeContainer call destroy');
      this.state.cy.destroy();
    }
  }
  setCyInstance() {
    console.log('CytoscapeContainer setCyInstance');
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
      cy.ready(this.props.onCyReady.bind(cy));
    }
    if (typeof this.props.onCyDestroy === 'function') {
      cy.on('destroy', this.props.onCyDestroy.bind(cy));
    } 
  }
  componentWillReceiveProps(nextProps) {
    // TODO?

    // just a test
    console.log('CytoscapeContainer componentWillReceiveProps', nextProps);
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
    console.log('CytoscapeContainer render', this.props);
    const {className, style} = this.props;
    return (
      <CytoscapeRender
        {...className ? {className} : {}}
        {...style ? {style} : {}}
        cyContainerRef={el => this.cyContainer = el}        
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

export default CytoscapeContainer;
