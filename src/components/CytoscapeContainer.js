import React from 'react';
// import PropTypes from 'prop-types';
import Cy from 'cytoscape';

import Cytoscape from './Cytoscape'; 

class CytoscapeContainer extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      teste: 1,
      cy: Cy() // just a test
    };
  }
  componentDidMount() {
    console.log(this.cyContainer);
    setTimeout(()=>{
      this.setState({teste: 2});
    },5000);
  }
  render() {
    return (
      <Cytoscape teste={this.state.teste} cyContainerRef={el => this.cyContainer = el}/>
    );
  }
}

export default CytoscapeContainer;
