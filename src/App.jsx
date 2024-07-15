// imports 
import { useReducer, useState } from 'react';
import './App.css'

// reducer function so that it updates and returns state
function reducer(state, action) { //define the 
  
}



const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [taskEntry, setTaskEntry] = useState('');// call the state. change the tasks every user entry




  return (
    <>
      <h1>Todo List</h1>
      
      {/* add a user form for task entry */}
      <form>
        <input type='text' value={taskEntry} onChange={e => setTaskEntry(e.target.value)} />
      </form>
    </>
      
  )
}


export default App;