import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem';



const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant, onChangeLabel, }) => {

    const elemTodo = todos.map((elem) => {
        return (
            <TodoListItem
                key={elem.id}
                {...elem}
                onToggleDone={() => onToggleDone(elem.id)}
                onToggleImportant={() => onToggleImportant(elem.id)}
                onDeleted={() => onDeleted(elem.id)}/>
        )
    })

    return (
        <ul className='list-group'>
            {elemTodo}
        </ul>
    )
}

export default TodoList






