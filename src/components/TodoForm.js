import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [insert, setInput] = useState(props.edit ? props.edit.value :
    '');
  const inputRef = useRef(null)

  /// input field ready for text upon refresh or onclick
  useEffect(() => {
      inputRef.current.focus()
  })

///  This function is to make changes in a specifc area in the App (FORM) tag
///   without refreshing the whole web browser
  const handleSubmit =  (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: insert
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
         <form className='todo-form' onSubmit={handleSubmit}>
             {props.edit ? (
                 <>
             <input type='text' 
                    placeholder='Updating Task?'
                    value={insert} 
                    name='text' 
                    className='todo-input' 
                    onChange={inputChanger} 
                    ref={inputRef}/>
             <button className='todo-button'>Update</button>
             </>
             )
              :
             (
                 <>
                 <input type='text' 
             placeholder='WHAT TO DO?'
             value={insert} 
             name='text' 
             className='todo-input' 
             onChange={inputChanger} 
             ref={inputRef}/>
      <button className='todo-button'>ADD TODO</button>
      </>
      )
             }

         </form>
  );
}

export default TodoForm