import React from 'react';
import { ACTIONS } from '../App'

export default function Todo ({ todo, dispatch }) { //access to dispatch to use onClick
  // const [editedText, setEditedText] = useState(todo.taskEntry);
  // const [isEditing, setIsEditing] = useState(false); // isEditing determines the viewing mode and editing mode.

  const handleEdit = () => {
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleEdit}
        style={{ marginRight: '8px' }}
      />

      <span style={{ color: todo.cpmplete ? '#AAA' : '#000'}}>
        {todo.taskEntry}</span>
      {/* pass in the id as an object. call onClick function so it calls the dispatch 
      with the TOGGLE and DELETE type with the current id in the payload */}
      <button onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id:
      todo.id }})}>Edit</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id:
      todo.id }})}>Delete</button>
    </div>
  )
}
