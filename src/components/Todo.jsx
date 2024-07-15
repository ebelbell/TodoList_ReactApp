import React from 'react';
import { ACTIONS } from '../App'

export default function Todo ({ todo, dispatch }) { //access to dispatch to use onClick
  return (
    <div>
      <span style={{ color: todo.cpmplete ? '#AAA' : '#000'}}>
        {todo.taskEntry}</span>
      {/* pass in the id as an object. call onClick function so it calls the dispatch 
      with the TOGGLE and DELETE type with the current id in the payload */}
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id:
      todo.id }})}>Toggle</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id:
      todo.id }})}>Delete</button>
    </div>
  )
}
