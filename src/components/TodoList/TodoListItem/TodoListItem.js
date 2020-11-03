import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ onDeleted, onToggleImportant, onToggleDone, done, label, important }) => {

    let classNames = 'text-left todo-text'
    let activeClassImportant = 'btn-outline-info'

    if (done) {
        classNames += ' done'
    }

    if (important) {
        classNames += ' important'
        activeClassImportant = 'btn-info'
    }

    return (
        <div className='list-group-item'>
            <div className='list_item'>
                <div className='checkbox-block'>
                    <input type='checkbox'
                        className='checkbox'
                        onChange={onToggleDone}
                        checked={done}
                    />
                    <p className={classNames}>{label}</p>
                </div>

                <div className='btn-group'>
                    <button onClick={onDeleted} className='btn btn-outline-info'>del</button>
                    <button onClick={onToggleImportant} className={`btn ${activeClassImportant}`}>important</button>
                </div>
            </div>
        </div>

    )
}

export default TodoListItem





