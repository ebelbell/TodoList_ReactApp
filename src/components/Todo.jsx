import React from 'react'

export default function Todo ({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.cpmplete ? '#AAA' : '#000'}}>
        {todo.taskEntry}</span>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
