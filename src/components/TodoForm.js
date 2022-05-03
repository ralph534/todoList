import React, {useState} from 'react'

function TodoForm() {
  const [input, setInput] = useState('');

  
  return (
    <div>
         <form className='todo-form'>
             <input type='text' placeholder='WHAT TO DO?' value={input} name='text' className='todo-input' />
             <button className='todo-button'>ADD TODO</button>

         </form>
    </div>
  )
}

export default TodoForm