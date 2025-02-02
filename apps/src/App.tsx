import { Alert } from './components/Alert';

import './App.css'

function App() {

  return (
    <div className='App'> 
      <Alert type="warning" heading="Success" closable onClose={ () => console.log("closed")} > 
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App
