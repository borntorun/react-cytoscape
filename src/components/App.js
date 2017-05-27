import React from 'react';
import CytoscapeContainer from './CytoscapeContainer';
import './styles.css';

const App = () => {
  const cyOptions ={
    elements: 'static/data.json?id=666',
    style: 'static/style.json'
  };
  return (
    <CytoscapeContainer 
      className='ole'
      style={{width:'100%', height: '100vh'}}
      cyOptions={cyOptions}
      onCyDestroy={(event)=>{
        console.log('on cy destroy', this, event);
      }}
      onCyReady={(event)=>{        
        console.log('on cy ready', this, event);
      }}
    />);
};

export default App;
