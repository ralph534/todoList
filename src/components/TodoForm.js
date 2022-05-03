import React, {useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

///  This function is to make changes in a specifc area in the App (FORM) tag
///   without refreshing the whole web browser
  const handleSubmit =  (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    setInput('');
  }


///  This function changes the default state of input which is an empty string
///  given setInput as the second param in the usestate to target the value in the 
////  input field
  const inputChanger = (e) => {
      setInput(e.target.value)
  }

  
  return (
    <div>
         <form className='todo-form' onSubmit={handleSubmit}>
             <input type='text' placeholder='WHAT TO DO?' value={input} name='text' className='todo-input' onChange={inputChanger} />
             <button className='todo-button'>ADD TODO</button>

         </form>
    </div>
  )
}

export default TodoForm