import { createContext, useState } from 'react';
import './App.css';

export const StatusContext = createContext();
function App() {
  const [state, setState] = useState({
    todo: {
      title: 'Todo',
      items: [],
    },
    doing: {
      title: 'Doing',
      items: [],
    },
    done: {
      title: 'Completed',
      items: [],
    },
  });
  return (
    <div className='App'>
      <StatusContext.Provider
        value={[state, setState]}
      ></StatusContext.Provider>
    </div>
  );
}

export default App;
