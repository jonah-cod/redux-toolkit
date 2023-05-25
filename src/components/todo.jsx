import React from 'react'



const Todo = (props) => {
    const { todo } = props
  return (
    <div>
        <span></span>
        <div className="actions">
        <i class="fas fa-check"></i>
        <i class="fas fa-trash"></i>
        </div>
    </div>
  )
}

export default Todo