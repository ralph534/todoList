import React, {useState} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'


function Todo({todos, completeTodo, removeTodo}) {
const [edit, setEdit] = useState({
    id: null,
    value: ''
})

  return todos.map((todo, index) => (
    <div className={todo.isCompplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='Icon'>
        <BsFillTrashFill className='delete-button' onClick={() => removeTodo(todo.id)}/>
        <AiOutlineEdit className='edit-button' onClick={() => setEdit({
            id: todo.id,
            value: todo.text
            })}/>
        </div>
    </div>
      )
    )
  }

export default Todo