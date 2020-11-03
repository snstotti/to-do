import React from 'react'
import './headerTodo.css'

const HeaderTodo =({toDo, done})=>{
    return (
        <div className='header-block'>
            <h1 className='header'>My Todo list</h1>
    <p className='status'>{toDo} more to do, {done} done</p>
        </div>
    
    )
}

export default HeaderTodo