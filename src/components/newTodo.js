import React, {useState, useRef, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice"

const NewTodo = () => {

    const demo_ref = useRef(null)
    const dispatch = useDispatch();
    //#region 
    const [title, settitle] = useState("");

    const handleChange = (e)=>{
      settitle(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        const date = new Date();

        if (title.trim()) {
            let new_task = {
              id: Date.now(),
              task: title,
              status: "NotStarted",
              due_date: date.toDateString(),
            };

            dispatch(addTodo(new_task))
            settitle("");
        }
        
    }

    //#endregion

    useEffect(()=>{
        demo_ref.current.focus();
    },[])
  return (
    <form className='new-task' onSubmit={handleSubmit}>
        <input ref={demo_ref} type='text' 
                placeholder='Add a task' 
                onChange={handleChange} 
                value={title}/>

        <button type="submit">I Got This!</button>
    </form>
  )
}

export default NewTodo