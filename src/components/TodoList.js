import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

///////////////////////////////////////////////////////

    const addTodo = (todo) => {
     if(!todo.text || /^\s*$/.test(todo.text)) {
         return
     }
   const newTodo = [todo, ...todos]
   setTodos(newTodo)
    }


    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(updated => (updated.id === todoId ? newValue : updated))
        )
    }
    
////////////////////////////////////////////////////////////// 
    const removeTodo = id => {
        let removal = [...todos].filter(todo => todo.id !== id);
        setTodos(removal)
}



////////////////////////////////////////////////

    const completeTodo = id => {
        let completedTodos = [...todos].map(completed => {
            if(completed.id===id) {
               completed.isComplete = !completed.isComplete
               console.log(completedTodos)
            }
            return completed
        })
        setTodos(completedTodos)
    }



    return (
       <div>
            <h3>What's On The Agenda For Today?</h3>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
       </div>
    )
}

export default TodoList;