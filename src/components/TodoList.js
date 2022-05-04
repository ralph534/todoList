import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
     if(!todo.text || /^\s*$/.test(todo.text)) {
         return
     }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    }

    ///  
    const removeTodo = id => {
        let removal = [...todos].filter(todo => todo.id !== id);
        setTodos(removal)
}

    const completeTodo = id => {
        let updatedTodos = todos.map(updated => {
            if(updated.id===id) {
               updated.isComplete = !updated.isComplete
            }
            return updated
        })
        setTodos(updatedTodos)
    }

    return (
       <div>
            <h3>What's On The Agenda For Today?</h3>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
       </div>
    )
}

export default TodoList;