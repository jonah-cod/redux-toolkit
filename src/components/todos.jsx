import React from 'react';
import { useSelector } from "react-redux"

import Todo from './todo'

const Todos = () => {

    const {todos} = useSelector((state)=>state)

    return (
        <div className='todos'>
            <h4>Todos</h4>
            {todos?.map(todo=><Todo key={todo.id} todo={todo}/>)}
        
        </div>

    )
}

export default Todos