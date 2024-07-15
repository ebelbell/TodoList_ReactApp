// imports 
import { useReducer, useState } from 'react';
import './App.css'

const ACTIONS = {
  ADD_TODO: 'add-tasks'
}

// reducer function so that it updates and returns state
function reducer(todos, action) { //define the 
  // change it so that the ACTIONS.ADD_TODO have something to do. start with switch statements  
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return[...todos, newTodo(action.payload.taskEntry)]
    
  }
}

// this fucntion will take in the taskEntry variable 
function newTask(taskEntry){
  return { id: Data.now(), taskEntry: taskEntry, complete: false } //return the new todo
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [taskEntry, setTaskEntry] = useState('');// call the state. change the tasks every user entry


  // add a new task
  function handleSubmit(e) {
    e.preventDefault() //prevents the page from refreshing
    dispatch({ type: ACTIONS.ADD_TODO, payload: { taskEntry: taskEntry} }); //the action we want it to do. the payload contains all of the variables needed to complete the action
    setTaskEntry(''); //sets it back to an empty string
  }

  console.log(todos);

  return (
    <>
      <h1>Todo List</h1>

      {/* add a user form for task entry  */}
      <form onSubmit={handleSubmit}>
        {/* placeholder='Add task' */}
        <input type='text' value={taskEntry} placeholder='Add task' onChange={e => setTaskEntry(e.target.value)} />
        <button> Add </button>
      </form>
    </>
      
  )
}


export default App;