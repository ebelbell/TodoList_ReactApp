// imports 
import { useReducer, useState } from 'react';
import './App.css';
import Todo from './components/Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo', //add a new task 
  TOGGLE_TODO: 'toggle-todo', //completing/ mark off a task
  EDIT_TODO: 'edit-todo', //edit a task
  DELETE_TODO: 'delete-todo' //delete a task
};

// reducer function so that it updates and returns state
function reducer(todos, action) { //define the 
  // change it so that the ACTIONS.ADD_TODO have something to do. start with switch statements  
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTask(action.payload.taskEntry)];
    case ACTIONS.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete } // new todo that is complete
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id) // filter to remove the unwanted todos. if the todo id is NOT = payload id, then it stays on the list, otherwise, it gets removed
    default:
      return todos;
  }
}

// this function will take in the taskEntry variable 
function newTask(taskEntry){
  // i want to try to use try/catch so that the input cannot be empty before adding a task
  try {
    if (!taskEntry) {
      throw new Error('Task entry cannot be empty');
    }
    return { id: Date.now(), taskEntry: taskEntry, complete: false }; //return the new todo
  } catch (err) {
    console.log('Error: unable to add new task: ', err.message);
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [taskEntry, setTaskEntry] = useState('');// call the state. change the tasks every user entry


  // add a new task
  function handleSubmit(e) {
    e.preventDefault(); //prevents the page from refreshing
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
        <button> Delete </button>

      </form>
      {todos.map(todo => {
        return <Todo key = {todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </>
      
  )
}


export default App;