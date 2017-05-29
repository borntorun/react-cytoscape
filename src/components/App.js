import React from 'react';
import Cytoscape from './CytoscapeContainer';
import './styles.css';

const data = getData();
const style = getStyle();

const App = () => {
  
  const cyOptions = {
    elements: data,
    style: style,
    zoom: 0.5,
    minZoom: 0.5,
    maxZoom: 1    
  };

  return (
    <Cytoscape 
      className='ole'
      style={{width:'100%', height: '100vh'}}
      cyOptions={cyOptions}
      onCyDestroy={function(event){
        console.log('on cy destroy', this, event);
      }}
      onCyReady={function(event){
        console.log('on cy ready', this, event);
      }}
    />);
};

export default App;

// function doFetch(url, options = {mode: 'no-cors'}) {
//   return fetch(url, options);
// }

function getData() {
  return [{
    'data' : {
      'name' : 'Javascript',
      'id' : '50',
      'value' : 0.00375,
      'idInt' : 50
    },
    
    'group' : 'nodes',
    'removed' : false,
    'selected' : false,
    'selectable' : true,
    'locked' : false,
    'grabbed' : false,
    'grabbable' : true,
    'classes' : 'xpto'
  }, {
    'data' : {
      'name' : 'Angular',
      'id' : '4',
      'value' : 0.00325,
      'idInt' : 4
    },

    'group' : 'nodes',
    'removed' : false,
    'selected' : false,
    'selectable' : true,
    'locked' : false,
    'grabbed' : false,
    'grabbable' : true,
    'classes' : 'xpto'
  }, {
    'data' : {
      'name' : 'Xpto',
      'id' : '44',
      'value' : 0.00325,
      'idInt' : 4
    },

    'group' : 'nodes',
    'removed' : false,
    'selected' : false,
    'selectable' : true,
    'locked' : false,
    'grabbed' : false,
    'grabbable' : true,
    'classes' : 'xpto'
  }, 
  {
    'data' : {
      'name' : 'Angular 999',
      'id' : '444',
      'value' : 0.00325,
      'idInt' : 4
    },

    'group' : 'nodes',
    'removed' : false,
    'selected' : false,
    'selectable' : true,
    'locked' : false,
    'grabbed' : false,
    'grabbable' : true,
    'classes' : 'xpto'
  }, 
  {
    'data' : {
      'source' : '4',
      'target' : '50',
      'id' : 'e-4-50',
      'value' : null,
      'weight': 1
    },
    'group' : 'edges',
    'removed' : false,
    'selected' : false,
    'selectable' : true,
    'locked' : false,
    'grabbed' : false,
    'grabbable' : true,
    'classes' : ''
  }
  ];
}

function getStyle() {
  return [{
    'selector' : 'core',
    'style' : {
      'selection-box-color' : '#AAD8FF',
      'selection-box-border-color' : '#8BB0D0',
      'selection-box-opacity' : '0.5'
    }
  }, {
    'selector' : 'node',
    'style' : {
      'width' : 'mapData(value, 0, 0.0037, 5, 70)',
      'height' : 'mapData(value, 0, 0.0037, 5, 70)',
      'content' : 'data(name)',
      'font-size' : '18px',
      'text-valign' : 'center',
      'text-halign' : 'center',
      'background-color' : 'rgba(74, 67, 67, 0.75)',
      'border-color' : '#fff',
      'border-width' : '1px',
      'border-opacity' : '0.5',
      'color' : '#f00',
      'overlay-padding' : '3px',
      'z-index' : '10',
      'display' : 'element',
      'opacity' : '0.5'
    }
  }, {
    'selector' : 'node[keywords*=\'open source\']',
    'style' : {
      'display' : 'element',

      'opacity' : '1'
    }
  }, {
    'selector' : 'node[?attr]',
    'style' : {
      'shape' : 'rectangle',
      'background-color' : '#aaa',
      'text-outline-color' : '#aaa',
      'width' : '16px',
      'height' : '16px',
      'font-size' : '6px',
      'z-index' : '1'
    }
  }, {
    'selector' : 'node[?query]',
    'style' : {
      'background-clip' : 'none',
      'background-fit' : 'contain'
    }
  }, {
    'selector' : 'node:selected',
    'style' : {
      'border-width' : '6px',
      'border-color' : '#AAD8FF',
      'border-opacity' : '0.75',
      'background-color' : '#77828C',
      'text-outline-color' : '#77828C'
    }
  }, {
    'selector' : 'edge',
    'style' : {
      'curve-style' : 'unbundled-bezier',
      'haystack-radius' : '0.5',
      'opacity' : '0.1',
      'line-color' : '#bbb',
      'width' : 'mapData(weight, 0, 1, 3, 16)',
      'overlay-padding' : '3px'
    }
  }, {
    'selector' : 'node.unhighlighted',
    'style' : {
      'opacity' : '0.2'
    }
  }, {
    'selector' : 'edge.unhighlighted',
    'style' : {
      'opacity' : '0.05'
    }
  }, {
    'selector' : '.highlighted',
    'style' : {
      'opacity' : '1'
    }
  }, {
    'selector' : 'node.highlighted',
    'style' : {
      'border-width' : '66px',
      'border-color' : '#AAD8FF',
      'border-opacity' : '0.5',
      'background-color' : '#394855',
      'text-outline-color' : '#394855'
    }
  }, {
    'selector' : 'edge.filtered',
    'style' : {
      'opacity' : '0'
    }
  }, {
    'selector' : 'edge[group=\'coexp\']',
    'style' : {
      'line-color' : '#d0b7d5'
    }
  }, {
    'selector' : 'edge[group=\'coloc\']',
    'style' : {
      'line-color' : '#a0b3dc'
    }
  }, {
    'selector' : 'edge[group=\'gi\']',
    'style' : {
      'line-color' : '#90e190'
    }
  }, {
    'selector' : 'edge[group=\'path\']',
    'style' : {
      'line-color' : '#9bd8de'
    }
  }, {
    'selector' : 'edge[group=\'pi\']',
    'style' : {
      'line-color' : '#eaa2a2'
    }
  }, {
    'selector' : 'edge[group=\'predict\']',
    'style' : {
      'line-color' : '#f6c384'
    }
  }, {
    'selector' : 'edge[group=\'spd\']',
    'style' : {
      'line-color' : '#dad4a2'
    }
  }, {
    'selector' : 'edge[group=\'spd_attr\']',
    'style' : {
      'line-color' : '#D0D0D0'
    }
  }, {
    'selector' : 'edge[group=\'reg\']',
    'style' : {
      'line-color' : '#D0D0D0'
    }
  }, {
    'selector' : 'edge[group=\'reg_attr\']',
    'style' : {
      'line-color' : '#D0D0D0'
    }
  }, {
    'selector' : 'edge[group=\'user\']',
    'style' : {
      'line-color' : '#f0ec86'
    }
  }, {
    'selector' : 'node.showit',
    'style' : {
      'opacity' : '1'
    }
  }, {
    'selector' : 'node.hideit',
    'style' : {
      'opacity' : '0.5'
    }
  }, {
    'selector' : 'edge.showit',
    'style' : {
      'line-color' : '#77828C',
      'line-style' : 'dotted',
      'opacity' : '1'
    }
  }, {
    'selector' : 'edge.hideit',
    'style' : {
      'opacity' : '0.05'
    }
  } 
  ];
}
