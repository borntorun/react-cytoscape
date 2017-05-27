import React from 'react';
import PropTypes from 'prop-types';
import Cy from 'cytoscape';

import Cytoscape from './Cytoscape'; 

function result(res) {
  return res.json();
}

function doFetch(url, options = {mode: 'no-cors'}) {
  return fetch(url, options);
}

class CytoscapeContainer extends React.Component {
  constructor(props) {
    super(props);
  
    // set initial state
    // cy: cytoscape instance
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
  setCyInstance(elements, style, layout) {
    
    const options = {
      // set container for rendering (get from ref in Cytoscape component)
      container: this.cyContainer,
      // set elements and style
      elements: elements,
      style: style,
      // set layout
      layout: {
        name: 'circle', // set default options?,
        zoom: 1,
        pan: {x:0, y:0}
      }
    };
    
    const cy = Cy(options);
    
    this.setState({
      cy: cy
    }); 

    cy.ready(this.props.onCyReady.bind(cy));
    cy.on('destroy', this.props.onCyDestroy.bind(cy));
  }
  fetchData(elements, style) {
    // for now only accepts url string to fetch data and style
    // TODO: accept JSON objects | ():Promise<result>
    
    Promise.all([elements, style].map(item => item? doFetch(item).then(result) : Promise.resolve(undefined)))
      .then((result) => {
        this.unsetCyInstance().setCyInstance(result[0], result[1]); 
      });
  }
  componentWillReceiveProps(nextProps) {
    const {elements, style} = nextProps.cyOptions;
    if (elements !== this.props.cyOptions.elements || style !== this.props.cyOptions.style) {
      this.fetchData(elements, style);
    }
  }
  componentDidMount() {
    const {elements, style} = this.props.cyOptions;
 
    this.fetchData(elements, style);
  }
  render() {
    const {className, style} = this.props;
    return (
      <Cytoscape
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
  cyOptions: PropTypes.shape({
    elements: PropTypes.string,
    style: PropTypes.string
  }).isRequired
};

export default CytoscapeContainer;
