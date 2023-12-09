import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { IconButton } from './components/IconButton';


function App() {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <Button name='buy'/>
      <IconButton icon='heart'/> 
    </div>
  );
}

export default App;
