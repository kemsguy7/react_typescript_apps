import { useState } from 'react'
import { Alert } from './components/Alert';
import './App.css'

function App() {

  return (
    <div className='App'> 
      <Alert type="Information" heading="Success">
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App
