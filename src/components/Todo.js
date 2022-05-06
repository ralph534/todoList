import React, {useState} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import TodoForm from './TodoForm'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
const [edit, setEdit] = useState({
    id: null,
    value: ''
})

const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id: null,
        value: ''
    })
}
if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />  
}

  return todos.map((todo, unique) => (
<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={unique}>
    <div className='todo-list' key={unique} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
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