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
        const cy = this;

        this.on('tap', 'node', function(evt){
          console.log('tap');
          console.log( 'this_ ', this);
          console.log( 'evt_ ', evt);
          cy.elements().addClass('hideit');
          cy.elements().removeClass('showit');

          this.connectedEdges()
            .forEach(function(item){
              
              item.toggleClass('hideit');
              item.toggleClass('showit');
            });

          this.connectedEdges()
            .connectedNodes()
            .filter(function(item){
              return item !== this;
            })
            .forEach(function(item){
              item.toggleClass('hideit');
              
              item.toggleClass('showit');
            });
          
        });

      }}
    />
  );
};

export default App;

// function doFetch(url, options = {mode: 'no-cors'}) {
//   return fetch(url, options);
// }

function getData() {
  return [{
    'data' : {
      'name' : 'Node 1',
      'id' : '1',
      'value' : 0.00375,
      'idInt' : 1
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
      'name' : 'Node 2',
      'id' : '2',
      'value' : 0.00325,
      'idInt' : 2
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
      'name' : 'Node 3',
      'id' : '3',
      'value' : 0.00325,
      'idInt' : 3
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
      'name' : 'Node 4',
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
  }, 
  {
    'data' : {
      'source' : '1',
      'target' : '2',
      'id' : 'e-1-2',
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
